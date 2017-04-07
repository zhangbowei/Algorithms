function difference(originArr) {
    function getDecimalLen(data) {
        return data.includes('.') ? data.match(/\.(\d*)$/)[1].length : 0;
    }

    const rawArr = originArr.map(function(item) {
        return item.toString();
    }).slice();
    const maxLen = rawArr.reduce(function(prev, item) {
        let len = getDecimalLen(item);

        return len > prev ? len : prev;
    }, -Infinity);

    return rawArr.reduce(function(prev, item) {
        return prev - item;
    }).toFixed(maxLen);
}

console.log(difference([0.3, 0.2]));