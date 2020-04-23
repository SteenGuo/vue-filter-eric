const getLabelByValue = function (value, list, label = "label") {
  let data = list.find((v) => v.value === value);
  if (data) {
    return data[label];
  } else {
    return "";
  }
};

export { getLabelByValue };
export default { getLabelByValue };
