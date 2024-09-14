// loaders/uppercase-loader.js
// module.exports = function (source, ...options) {
//     console.log('%c [ 自定义loader ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', source, options)
//   // 将内容转换为大写
//   return source.toUpperCase();
// };

// loaders/uppercase-loader.js
const { getOptions } = require('loader-utils');

module.exports = function (source) {

    // 获取 Loader 选项
    const options = getOptions(this);

    console.log('%c [ 自定义loader ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', source, options)
    
    
    // 访问选项
    const pa1 = options.pa1;
    const pa2 = options.pa2;

    // 使用选项进行处理（在此示例中只是打印）
    console.log('pa1:', pa1);
    console.log('pa2:', pa2);

    // 将内容转换为大写
    return source.toUpperCase();
};