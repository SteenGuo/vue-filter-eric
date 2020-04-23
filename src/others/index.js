/**
 * 非空值
 * @param {*} _value 
 * @param {*} _symbol 
 */
export function nonempty (_value, _symbol = "-") {
  return _value === 0 ? 0 : _value || _symbol;
};

