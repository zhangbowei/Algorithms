export default function findRepeatNum(originArr) {
  const rawArr = originArr.slice().sort((a, b) => a !== b); //不能用 a-b, 字符串还是会被转类型
  const reverseArr = rawArr.slice().reverse();

  const soleArr = rawArr.reduce(function (prev, item) {
    return prev.includes(item) ? prev : prev.concat([item]);
  }, []);

  const resArr = soleArr.reduce(function(prev, item) {
    return prev.concat([{[[typeof item, ':', item].join('')] : (rawArr.length -  reverseArr.indexOf(item)) - rawArr.indexOf(item)}]);
  }, []);

  return resArr;
}
