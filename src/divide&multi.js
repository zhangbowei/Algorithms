function multiplay(a, b) {
  const getLen = function(num) {
    const str = num.toString();
    return str.indexOf('.') !== -1 ? str.match(/\.(.*?)$/)[1].length : 0;
  }

  const len = getLen(a) + getLen(b);

  return parseFloat(a * b).toFixed(len);
}

console.log(multiplay(3, 0.001));

function Divide(a, b) {
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

console.log(Divide(2.2, 3));
