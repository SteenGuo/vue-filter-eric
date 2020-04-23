import * as array from "./array";
import * as date from "./date";
import * as math from "./math";
import * as number from "./number";
import * as object from "./object";
import * as string from "./string";
import * as others from "./others";

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
