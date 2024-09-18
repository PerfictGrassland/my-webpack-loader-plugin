export const setViewport = function (scale) {
  // 查找 name 为 viewport 的 meta 标签
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute(
      "content",
      `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalabel=no, shrink-tofit=no`
    );
  } else {
    // 如果没有找到，则创建新的 meta 标签
    viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalabel=no, shrink-tofit=no`;
    document.head.appendChild(viewportMeta);
  }
};
