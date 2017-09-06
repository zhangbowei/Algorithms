var inputArr = [
    `9001
0
1
2`,
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
        return rawData.map(function (item) {
            return +item;
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    // console.log(findMaxChildStr(data[0]));
    console.log(productMaxNum(data));

    function productMaxNum(dataArr) {
        function getMax(dataArr) {
            return Math.max.apply(null, dataArr);
        }
        function getMin(dataArr) {
            return Math.min.apply(null, dataArr);
        }
        function getOutput(data) {
            return data.join('');
        }

        var number = dataArr[0], cardArr = dataArr.slice(1);
        var res = [];
        var numArr = Math.abs(number).toString().split('').map(function (item) {
            return +item;
        });
        if (number > 0) {
            for (var i = 0; i < numArr.length; ++i) {
                if (cardArr.length === 0) {
                    res.push(numArr[i]);
                    continue;
                }
                var maxCard = getMax(cardArr);
                if (maxCard > numArr[i]) {
                    cardArr.splice(cardArr.indexOf(maxCard), 1);
                    res.push(maxCard);
                } else {
                    res.push(numArr[i]);
                }
            }
            res = getOutput(res);
        } else {
            for (var i = 0; i < numArr.length; ++i) {
                if (cardArr.length === 0) {
                    res.push(numArr[i]);
                    continue;
                }
                var minCard = getMin(cardArr);
                if (minCard < numArr[i]) {
                    cardArr.splice(cardArr.indexOf(minCard), 1);
                    res.push(minCard);
                } else {
                    res.push(numArr[i]);
                }
            }
            res = '-' + getOutput(res);
        }

        return res;
    }
}