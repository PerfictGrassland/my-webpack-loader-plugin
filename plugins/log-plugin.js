// plugins/log-plugin.js
class LogPlugin {
  constructor(options) {
    console.log(
      "%c [ 插件参数 ]-17",
      "font-size:13px; background:pink; color:#bf2c9f;",
      options
    );
    this.options = options || {};
  }
  apply(compiler) {
    console.log(
      "%c [ 自定义插件 ]-4",
      "font-size:13px; background:pink; color:#bf2c9f;"
    );
    // 在 compilation 事件时触发
    compiler.hooks.emit.tap("LogPlugin", (compilation) => {
      console.log("构建完成！");
    });
  }
}

module.exports = LogPlugin;

// plugins/simple-plugin.js
// function SimplePlugin(options) {
//     console.log('%c [ 插件参数 ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', options)
//     this.options = options || {};
// }

// SimplePlugin.prototype.apply = function (compiler) {
//     compiler.hooks.emit.tap('SimplePlugin', (compilation) => {
//         console.log('构建完成！');

//         // 使用插件选项
//         if (this.options.message) {
//             console.log(this.options.message);
//         }
//     });
// };

// module.exports = SimplePlugin;
