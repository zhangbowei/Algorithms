export function multiplay(a, b) {
  const getLen = function(num) {
    const str = num.toString();
    return str.indexOf('.') !== -1 ? str.match(/\.(.*?)$/)[1].length : 0;
  }

  const len = getLen(a) + getLen(b);

  return parseFloat(a * b).toFixed(len);
}


export function divide(a, b) {
  const getLen = function(num) {
    const str = num.toString();
    return str.includes('.') ? str.match(/\.(.*?$)/)[1].length : 0;
  }

  const getInt = function (num) {
    return num.toString().replace('.', '');
  }

  const len = getLen(b) - getLen(a);

  return getInt(a) / getInt(b) * Math.pow(10, len);
}

export function difference(a, b) {
    function getDecimalLen(data) {
        return data.includes('.') ? data.match(/\.(\d*)$/)[1].length : 0;
    }

    const rawArr = [a, b].map(function(item) {
        return item.toString();
    });
    const maxLen = rawArr.reduce(function(prev, item) {
        let len = getDecimalLen(item);

        return len > prev ? len : prev;
    }, -Infinity);

    return rawArr.reduce(function(prev, item) {
        return prev - item;
    }).toFixed(maxLen);
}
