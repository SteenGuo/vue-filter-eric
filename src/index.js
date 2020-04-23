import array from "./array";
import date from "./date";
import math from "./math";
import number from "./number";
import object from "./object";
import string from "./string";
import others from "./others";

export * from "./array";
export * from "./date";
export * from "./math";
export * from "./number";
export * from "./object";
export * from "./string";
export * from "./others";

let filters = {
  ...array,
  ...date,
  ...math,
  ...number,
  ...object,
  ...string,
  ...others,
};

export default {
  install: function (Vue) {
    // 注册全局过滤器
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });
  },
};
