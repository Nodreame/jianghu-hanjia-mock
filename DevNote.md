# DevNote

1. 横屏时高度较低手机显示问题
- baseinfo 文字撞 content
  - 解决方案： 1、稍微左移； 2、设定内容区域百分比界限及越界滚动；3、重新对页面进行百分比计算并使用合适单位；
  - 总结：为防止基于百分比的布局因为页面宽度长度比例特殊导致的问题，尽量使用vw、vh取代百分比进行布局，在布局之后在固定范围内使用百分比调整页面.
- navlist 显挤
  - 解决方案：重新计算方块长与界面的联系，计算并使其自适应.
  
2. Nav-Slider制作
- 准备
  - 重新布局 talent-item：砍半，rubbish+name+value 占50%，slider 占50% 【flex】
  - rubbish + name + value 【flex】
- 制作过程
  - 查找 slider 实现思路，完成 UI 制作以及组装
    - css清除原有样式
    - 制作左右两个svg的加减符号
    - [ ]黑色进度条Track，min 有一个小小的黑色正四边棱形
    - 中间是一个青色黑外框的正四边棱形滑块，高度约20px
    - 实现简单拖动功能（自带）
    - 实现分段功能（自带）
  - 浏览器兼容性
    - Chrome + Firefox
    - IE适配差
3. 属性界面制作
- 切图标学习[https://www.cnblogs.com/padding1015/p/7085539.html]  
- 