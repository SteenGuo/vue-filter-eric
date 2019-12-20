const number = {
  thousand(_value, _symbol = " ") {
    const parts = `${_value || _value === 0 ? _value : ""}`.split(".");
    if (parts.length) {
      parts[0] = parts[0].replace(/(\d)(?=(\d{3})+\b)/g, "$1" + _symbol);
    }
    return parts.join(".");
  },

  /**
   * 百分比，保留x位有效小数
   * @param {Number} _number 被操作数
   * @param {Number} _decimals 保留几位有效小数
   */
  percent(_number, _decimals = 2) {
    let _temp = _number * 100;
    return _temp.toFixed(_decimals);
  },

  /**
   * 四舍五入，保留x位小数
   * @param {Number} _number 
   * @param {Number} _decimals 保留几位有效小数
   */
  toFixed(_number, _decimals = 2) {
    return _number.toFixed(_decimals)
  }
};

export default number;
