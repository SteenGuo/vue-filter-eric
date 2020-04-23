/**
 * 千位分割
 * @param {*} _value 被分割的数值
 * @param {*} _symbol 分割符号
 */
const thousand = function (_value, _symbol = " ") {
  const parts = `${_value || _value === 0 ? _value : ""}`.split(".");
  if (parts.length) {
    parts[0] = parts[0].replace(/(\d)(?=(\d{3})+\b)/g, "$1" + _symbol);
  }
  return parts.join(".");
};

/**
 * 百分比，保留x位有效小数
 * @param {Number} _value 被操作数
 * @param {Number} _decimals 保留几位有效小数
 */
const percent = function (_value, _decimals = 2) {
  let num = Number(_value);
  return num ? `${(num * 100).toFixed(_decimals)}%` : _value;
};

/**
 * 四舍五入，保留x位小数
 * @param {Number} _value
 * @param {Number} _decimals 保留几位有效小数
 */
const toFixed = function (_value, _decimals = 2) {
  let num = Number(_value);
  return num ? num.toFixed(_decimals) : _value;
};


export { thousand, percent, toFixed };
export default { thousand, percent, toFixed };
