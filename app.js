(function () {
  var routePaths = ['#/potential', '#/acupoint', '#/talent', '#/prop', '#/outfit', '#/skill'];
  console.log('location:', location)

  window.onhashchange = function (e) {
    setNavFocus(e.newURL);
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

  // init
  if (location.hash === '') {
    location.hash = '#/talent';
  } else {
    setNavFocus(location.hash);
  }
})();