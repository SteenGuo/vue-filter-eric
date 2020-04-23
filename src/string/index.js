/**
 * 字符替换*，隐藏手机号或者身份证号等
 * replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
 * ecDo.replaceStr('18819322663',[3,5,3],0)       //188*****663
 * ecDo.replaceStr('asdasdasdaa',[3,5,3],1)       //***asdas***
 * ecDo.replaceStr('1asd88465asdwqe3',[5],0)      //*****8465asdwqe3
 * ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')  //1asd88465as+++++
 * @param {String} str 要替换的字符串
 * @param {Array} regArr 字符格式
 * @param {Number} type 替换方式
 * @param {String} replaceText 替换的字符（默认*）
 */
export function strReplace(str, regArr, type = 0, replaceText = "*") {
  var regtext = "",
    Reg = null;
  if (regArr.length === 3 && type === 0) {
    regtext =
      "(\\w{" + regArr[0] + "})\\w{" + regArr[1] + "}(\\w{" + regArr[2] + "})";
    Reg = new RegExp(regtext);
    var replaceCount = this.repeatStr(replaceText, regArr[1]);
    return str.replace(Reg, "$1" + replaceCount + "$2");
  } else if (regArr.length === 3 && type === 1) {
    regtext =
      "\\w{" + regArr[0] + "}(\\w{" + regArr[1] + "})\\w{" + regArr[2] + "}";
    Reg = new RegExp(regtext);
    var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
    var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
    return str.replace(Reg, replaceCount1 + "$1" + replaceCount2);
  } else if (regArr.length === 1 && type === 0) {
    regtext = "(^\\w{" + regArr[0] + "})";
    Reg = new RegExp(regtext);
    var replaceCount = this.repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount);
  } else if (regArr.length === 1 && type === 1) {
    regtext = "(\\w{" + regArr[0] + "}$)";
    Reg = new RegExp(regtext);
    var replaceCount = this.repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount);
  }
}

/**
 * 格式化处理字符串
 * ecDo.stringFormat('1234asda567asd890')       //"12,34a,sda,567,asd,890"
 * ecDo.stringFormat('1234asda567asd890',4,' ') //"1 234a sda5 67as d890"
 * ecDo.stringFormat('1234asda567asd890',4,'-') //"1-234a-sda5-67as-d890"
 * @param {String} str
 * @param {Number} size
 * @param {String} delimiter
 */
export function strFormat(str, size = 3, delimiter = ",") {
  var regText = "\\B(?=(\\w{" + size + "})+(?!\\w))";
  var reg = new RegExp(regText, "g");
  return str.replace(reg, delimiter);
}
