import array from "./array";
import date from "./date";
import math from "./math";
import number from "./number";
import object from "./object";
import string from "./string";

let filters = { ...array, ...date, ...math, ...number, ...object, ...string };
let { dateFormat, thousand, getLabelFromValue, strReplace,stringFormat } = filters;

export { dateFormat, thousand, getLabelFromValue, strReplace,stringFormat };

export default {
  install: function(Vue) {
    // 注册全局过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key]);
    });
  }
};
