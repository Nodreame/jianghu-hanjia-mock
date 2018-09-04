(function () {
  // console.log(document.getElementById('container'));

  function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

  document.getElementsByClassName('base-figure')[0].addEventListener("click", function () {
    toggleFullScreen();    
    console.log('wrapper click');
  }, false);

  var routePaths = [
    '#/person/potential', '#/person/acupoint', '#/person/talent', 
    '#/person/prop', '#/person/outfit', '#/person/skill'
  ];
  var routeFiles = [
    'person-potential', 'person-acupoint', 'person-talent', 
    'person-prop', 'person-outfit', 'person-skill'
  ];
  console.log('location:', location)
  var routeCache = {};    // html模板文件相对固定，可以缓存

  window.onhashchange = function (e) {
    setNavFocus(e.newURL);
    setPersonPage(e.newURL);
  }

  // 输入url自动变换选中
  var setNavFocus = function (nowUrl) {
    for (var i=0; i<routePaths.length; i++) {
      if (nowUrl.indexOf(routePaths[i]) > -1) {
        document.getElementsByClassName('nav-item')[i].className = 'nav-item nav-item-focus';
      } else {
        document.getElementsByClassName('nav-item')[i].className = 'nav-item';
      }
    }
  }

  var setPersonPage = function (nowUrl) {
    for (var i=0; i<routePaths.length; i++) {
      if (nowUrl.indexOf(routePaths[i]) > -1) {
        var routeName = routeFiles[i];

        console.log('routeCache[routeName]:', routeCache[routeName]);
        if (routeCache[routeName]) {
          document.getElementById("person-content").innerHTML = routeCache[routeName];          
        } else {
          xmlhttp = new XMLHttpRequest();
          xmlhttp.open('GET', 'modules/person/' + routeName + '.html', true);
          xmlhttp.send();
          xmlhttp.onreadystatechange = function () {
            console.log('xmlhttp.readyState"', xmlhttp.readyState);
            if (xmlhttp.readyState === 4) {
              console.log('xmlhttp.responseText:', xmlhttp.responseText);
              document.getElementById("person-content").innerHTML = xmlhttp.responseText;
              routeCache[routeName] = xmlhttp.responseText;
            }
          }
        }
        return;
      }
    }
  }

  // init
  // toggleFullScreen();  
  if (location.hash === '') {
    location.hash = '#/person/talent';
  } else {
    setNavFocus(location.hash);
    setPersonPage(location.hash);
  }
})();