const path = require("path");

module.exports = {
  mode: "production", 
  entry: "./src/index.js",
  output: {
    filename: "vue-filter-eric.js",
    path: path.resolve(__dirname, "lib"),
    library: "VueFilter", // 导出库(exported library)的名称,
    libraryTarget: "umd" // 通用模块定义
  }
};
