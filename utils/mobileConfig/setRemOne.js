import { setViewport } from './index';
(function (window, document) {
  const resize = function () {
    // 获取视口宽度
    const viewportwidth =
      document.documentElement.clientWidth || window.innerWidth;
    // 设置根元素字体大小
    // 假设设计稿的宽度为 375px，基准字体大小为 100px
    const baseWidth = 750;
    const baseFontSize = 100;
    const fontSize = (viewportwidth / baseWidth) * baseFontSize;
    document.documentElement.style.fontSize = fontSize + "px";
  };
  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", resize); // 可选，专门处理方向变化的事件
  window.addEventListener("DOMContentLoaded", function() {
    setViewport(1);
  });
  window.addEventListener("load", resize);
  //   window.onload = resize;  window.onresize = resize;  window.onorientationchange = resize;
})(window, document);
