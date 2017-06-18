function fibonacci(number) {
    const cacheArr = [0, 1, 1];
    const getData = function(index) {
        if (cacheArr[index] !== void 0) {
            return cacheArr[index];
        } else {
            cacheArr[index] = getData(index-2) + getData(index-1);
            return cacheArr[index];
        }
    }

    return getData(number);
}

console.log(fibonacci(39));
