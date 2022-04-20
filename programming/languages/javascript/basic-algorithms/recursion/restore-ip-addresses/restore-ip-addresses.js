const restoreIpAddresses = (s, result, results, level) => {
  // console.log(level, result, s, results);

  const valid = (s) => {
    if (s.length === 1) return true;
    if ((s.length > 1 && s.substring(0, 1) === "0") || +s >= 256 || s === "")
      return false;
    return true;
  };

  if (s.length < 4 - level || level > 3) return results;

  if (level === 3 && valid(s)) {
    results.push(result + s);
    return results;
  }

  let tempS = s;
  let tempResult = result;

  for (let i = 1; i <= 3 && tempS.length >= i; i++) {
    let partial = tempS.substring(0, i);

    if (valid(partial)) {
      tempS = tempS.substring(i);
      result = result + partial + ".";
      restoreIpAddresses(tempS, result, results, level + 1);
      tempS = s;
      result = tempResult;
    } else break;
  }

  return results;
};

// Testing....
console.log(restoreIpAddresses("101023", "", [], 0));
console.log(restoreIpAddresses("25525511135", "", [], 0));
console.log(restoreIpAddresses("0000", "", [], 0));
console.log(restoreIpAddresses("10131512", "", [], 0));
