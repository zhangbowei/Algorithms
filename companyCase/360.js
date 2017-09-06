//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `4
1 3 7 9
3
2 10 12`,
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
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findMinDiff(data));
    function findMinDiff(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }
        function getSum(dataArr) {
            return dataArr.reduce(function (prev, item) {
                return prev + item;
            }, 0);
        }
        function getDiff(a, b) {
            return Math.abs(a - b);
        }
        function getOutput(dataArr) {
            return Math.min.apply(null, dataArr);
        }

        var numA = dataArr[0][0], seqA = dataArr[1];
        var numB = dataArr[2][0], seqB = dataArr[3];
        var sumA = getSum(seqA), sumB = getSum(seqB);
        var map = createSoleDimenArr(numB, Infinity);

        for (var i = 0; i < numA; ++i) {
            for (var j = 0; j < numB; ++j) {
                var a = sumA - seqA[i] + seqB[j];
                var b = sumB - seqB[j] + seqA[i];
                var diff = getDiff(a, b);
                var temp;
                if (diff < map[j]) {
                    map[j] = diff;
                    temp = seqA[i];
                    seqA[i] = seqB[j];
                    seqB[j] = temp;
                }
            }
        }

        var res = getOutput(map);

        return res;
    }

}
//
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `4
1 3 7 9
3
2 10 12`,
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
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findMinDiff(data));
    function findMinDiff(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }
        function getSum(dataArr) {
            return dataArr.reduce(function (prev, item) {
                return prev + item;
            }, 0);
        }
        function getDiff(a, b) {
            return Math.abs(a - b);
        }
        function getOutput(dataArr) {
            return Math.min.apply(null, dataArr);
        }

        var numA = dataArr[0][0], seqA = dataArr[1];
        var numB = dataArr[2][0], seqB = dataArr[3];
        var numZ = Math.min(numA, numB);

        for (var k = 0; k < numZ; ++k) {
            var sumA = getSum(seqA), sumB = getSum(seqB);
            var map = createSoleDimenArr(numB, getDiff(sumA, sumB));
            var locationA, locationB, temp;
            for (var i = 0; i < numA; ++i) {
                for (var j = 0; j < numB; ++j) {
                    var a = sumA - seqA[i] + seqB[j];
                    var b = sumB - seqB[j] + seqA[i];
                    var diff = getDiff(a, b);
                    var temp;
                    if (diff < map[j]) {
                        locationA = i;
                        locationB = j;
                    }
                }
            }
            temp = seqA[locationA];
            seqA[locationA] = seqB[locationB];
            seqB[locationB] = temp;
        }

        var res = getOutput(map);

        return res;
    }

}

//题目：粉笔，最大价值组合
//注意：这里不能用回溯法，回溯法包含了顺序，类似于排列。
//应该用组合，()
////test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `5 5
1 2 3 3
2 1 3`,
`5 15
1 2 3 6
2 1 3`
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
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findMaxGroup(data));
    function findMaxGroup(dataArr) {
        var typeA = dataArr[1].slice(0, 2);
        var typeB = dataArr[1][2];
        var typeC = dataArr[1][3];
        var numArr = dataArr[0];
        var valueArr = dataArr[2];

        var getNum = function(numArr, type) {
            if(type === 0) {
                if (numArr[0] < typeA[0] || numArr[1] < typeA[1]) {
                    return false;
                } else {
                    numArr[0] -= typeA[0];
                    numArr[1] -= typeA[1];
                    return true;
                }
            }
            if (type === 1) {
                if (numArr[1] < typeB) {
                    return false;
                } else {
                    numArr[1] -= typeB;
                    return true;
                }
            }
            if (type === 2) {
                if (numArr[0] < typeC) {
                    return false;
                } else {
                    numArr[0] -= typeC;
                    return true;
                }
            }
        }

        var getMethod = function(numArr) {
            return [0, 1, 2].reduce(function(prev, item) {
                var cpNum = numArr.slice();
                var value = 0;
                if (getNum(cpNum, item)) {
                    value = valueArr[item] + getMethod(cpNum);
                }

                return prev < value ? value : prev;
            }, 0);
        }

        var res = getMethod(numArr, valueArr);

        return res;
    }


}
//题目：粉笔最大售价
//题型：能手算题(数学题)  组合(分情况)

//属于：如何找到所有的情况(分解问题，问题可能为情况的和/最大值，
// 但不外乎找到情况的结果.) => 组合
//1. 尝试循环找到所有情况，本体其实遍历每种混合个数，就是一种情况(单独买已经随之确定)
//2. 类似的还有跳台阶问题，
//3. 而排列问题是讲究次序的/顺序的。
//最后：一般这种问题，实际手算一下，(就能知道情况有啥了)

var inputArr = [
    `5 5
1 2 3 3
2 1 3`,
    `5 15
1 2 3 6
2 1 3`
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
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(findMaxGroup(data));
    function findMaxGroup(dataArr) {
        var goodArr = dataArr[0].slice();
        var typeA = dataArr[1].slice(0, 2), typeB = dataArr[1][2], typeC = dataArr[1][3];
        var valArr = dataArr[2].slice();

        var getOneMix = function (goodArr) {
            var cpArr = goodArr;
            if (cpArr[0] > typeA[0] && cpArr[1] > typeA[1]) {
                cpArr[0] -= typeA[0];
                cpArr[1] -= typeA[1];
                return true;
            }

            return false;
        }
        var getSumVal = function (mixNum, goodArr) {
            var a =  mixNum * valArr[0] ;
            var b = ~~(goodArr[0] / typeC)*valArr[2];
            var c = ~~(goodArr[1] / typeB)*valArr[1];

            var res = a + b + c;
            return res;
        }
        var getMaxValue = function () {
            var max = 0, count = 0;
            while (true) {
                var val = getSumVal(count, goodArr);
                max = max < val ? val : max;
                if (getOneMix(goodArr)) {
                    ++count;
                } else {
                    break;
                }
            }

            return max;
        }

        var res = getMaxValue();

        return res;
    }
}


//
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `5
4 5 1 3 2`
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
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(productInfor(data[1]));
    function productInfor(dataArr) {
        // function getMapArr(dataArr) {
        //     return dataArr.reduce(function(prev, item, index) {
        //         return prev.concat([{val: item, index}]);
        //     }, []);
        // }
        // function getSortMap(mapArr) {
        //     return mapArr.sort(function(a, b) {
        //         var resA = b.val - a.val;
        //     });
        // }
        function getMaxNum(data, num) {
            return data.reduce(function (prev, item) {
                if (item > num) {
                    ++prev;
                }
                return prev;
            }, 0);
        }

        // var mapArr = getMapArr(dataArr);
        // var sortArr = getSortMap(mapArr);
        var last;
        var res = dataArr.reduce(function (prev, item, index) {
            //即使这样，性能也有所提升
            if (last !== void 0 && last > item) {
                prev.push(prev.slice(-1)[0] + 1);
            } else {
                prev.push(getMaxNum(dataArr.slice(0, index), item));
            }

            return prev;
        }, []);
        return res.join(" ");
    }

}





















