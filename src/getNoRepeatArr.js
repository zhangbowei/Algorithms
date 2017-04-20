function getNoRepeatArr(dataArr) {
    function filterRepeat(originArr) {
      const [rawArr, len] = [originArr.slice(), originArr.length];
      const hash = {};

      return rawArr.reduce(function(prev, item) {
        let key = [typeof(item), item].join('');

        if (hash[key] !== 1) {
          prev.push(item);
          hash[key] = 1;
        }

        return prev;
      }, []);
    }

    return filterRepeat(dataArr).length;
}

console.log(getNoRepeatArr([12933, 111111, 59220, 69433, 59220, 111111]));