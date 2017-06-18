function shuffleArr(dataArr) {
    const rawArr = dataArr.slice();

    rawArr.forEach(function(item, index) {
        // const order = ~~(Math.random()*(rawArr.length - 1));
        const order = ~~(Math.random()*(rawArr.length));
        const element = rawArr[order];

        rawArr[order] = item;
        rawArr[index] = element;
    });

    return rawArr;
}

console.log(shuffleArr([1, 2, 3]));