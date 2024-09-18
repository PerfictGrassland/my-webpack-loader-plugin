import { setViewport } from "./index";

(function (window, document) {
  const resize = function () {
    const viewportwidth =
      document.documentElement.clientWidth || window.innerWidth; //  dpr为1，就是750， dpr为2，那就是1500，依次类推，各视图的比例是不变的，根据自己的设计稿来就好
    const fontSize = viewportwidth / 10; /// 750 / 10 = 75px = 1rem
    document.documentElement.style.fontSize = fontSize + "px";
  };

  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", resize); // 可选，专门处理方向变化的事件
  window.addEventListener("DOMContentLoaded", function () {
    // 获取设备像素比
    const dpr = window.devicePixelRatio || 1;
    // 计算 initial-scale
    const scale = 1 / dpr;
    setViewport(scale);
  });
  window.addEventListener("load", resize);

  //   window.onload = resize;  window.onresize = resize;  window.onorientationchange = resize;
})(window, document);
