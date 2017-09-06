//题目：城市  图 最短路径
//test input
var inputArr = [
    `5
1 2 1
2 5 1
5 4 1
4 3 1`,
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
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(calculateMaxMoney(data));
    // print('your function');
    function calculateMaxMoney(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }
        function createTwoDimenArr(column, row) {
            return createSoleDimenArr(column).map(function (good, tag) {
                return createSoleDimenArr(row).map(function (element, order) {
                    return Infinity;
                });
            });
        }
        function createMap(dataArr, num) {
            var mapArr = createTwoDimenArr(num + 1, num + 1);
            dataArr.forEach(function (data) {
                mapArr[data[0]][data[1]] = data[2];
                mapArr[data[1]][data[0]] = data[2];
            });

            for (var k = 1; k < mapArr.length; ++k) {
                for (var i = 1; i < mapArr.length; ++i) {
                    for (var j = 1; j < mapArr.length; ++j) {
                        if (mapArr[i][k] + mapArr[k][j] < mapArr[i][j]) {
                            mapArr[i][j] = mapArr[i][k] + mapArr[k][j];
                        }
                    }
                }
            }

            return mapArr;
        }
        function getFinalVal(mapArr) {
            var res = mapArr.reduce(function (stock, good, tag) {
                var val = good.reduce(function (box, element, order) {
                    if (element !== Infinity && box < element && tag !== order) {
                        box = element;
                    }
                    return box;
                }, -1);
                return (val > stock && val !== Infinity) ? val : stock;
            }, -1);

            return 10 * res + (1 + res) * res / 2;
        }

        var cityNum = dataArr[0][0];
        var rawData = dataArr.slice(1);
        var mapArr = createMap(rawData, cityNum);

        return getFinalVal(mapArr);
    }
}





