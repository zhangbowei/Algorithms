var inputArr = [
    // `11110101011111101011`,
    // `01`,
    // `10`,
    // `010`,
    // `101`,
    // `111`,
    // ``,
    // `0`,
    // `1`,
    // `00`,
    // ``,
    // `10101`,
    `0101010`,
    `1110111`,
    `0001000`,
    `0`,
    `111110`,
    `011111`
];

inputArr.forEach(function (input, index) {
    // console.log(index);
    // console.log('input: ', input);
    doIt(input.split('\n'));
});

//submit this
/* Array.isArray(dataArr)不能用
*/
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return (index === 0) ? item : +item;
            });
        });
    }

    var data = formatData(input);
    console.log(calculateMaxLen(data[0][0]));

    function calculateMaxLen(dataStr) {
        var dataArr = dataStr.split('');
        return dataArr.reduce(function(stock, good) {
            if(stock.prev !== good) {
                ++ stock.num;
                stock.prev = good;
            } else {
                stock.num = 1;
            }
            stock.max = Math.max(stock.num, stock.max);
            return stock;
        }, {num: 0, prev: '', max: 0}).max;
    }
}
