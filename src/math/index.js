/**
 * 绝对值
 * @param {*} _value
 */
const abs = function (_value) {
  return Math.abs(_value);
};

/**
 * 反余弦值
 * @param {*} _value
 */
const acos = function (_value) {
  return Math.acos(_value);
};

/**
 * 反正弦值
 * @param {*} _value
 */
const asin = function (_value) {
  return Math.asin(_value);
};

/**
 * 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值
 * @param {*} _value
 */
const atan = function (_value) {
  return Math.atan(_value);
};

/**
 * 上舍入
 * @param {*} _value
 */
const ceil = function (_value) {
  return Math.ceil(_value);
};

/**
 * 余弦
 * @param {*} _value
 */
const cos = function (_value) {
  return Math.cos(_value);
};

export { abs, acos, asin, atan, ceil, cos };
export default { abs, acos, asin, atan, ceil, cos };
