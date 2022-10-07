export const comparatorCodeList = (list, code) => {
  var sameCode = false;
  list.forEach((item) => {
    if (item === code) {
      sameCode = true;
      return sameCode;
    }
  });
  return sameCode;
};
