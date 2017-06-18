function productSoleArr(dataArr) {
    const [rawArr, len] = [dataArr.slice(), dataArr.length];
    const hash = {};

    return rawArr.reduce(function(prev, item) {
        const key = [typeof(item), item].join('');
        if (hash[key] === void 0) {
            hash[key] = true;
            return prev.concat([item]);
        } else {
            return prev;
        }
    }, []);
}

console.log(productSoleArr([12933, 111111, 59220, 69433, 59220, 111111]));