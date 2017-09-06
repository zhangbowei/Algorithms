//找结构，找边界，找次数，找方法(排列/组合)
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
//题目：大数相乘
var inputArr = [
    `72106547548473106236 982161082972751393`,
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
        /* [^\s]+用+号，用*不匹配会填充''.*/
        return rawData.map(function (good) {
            var res = good.match(/[^\s]+/g);
            return res.map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return item;
            });
        });
    }

    var data = formatData(input);
    console.log(calculateMul(data[0]));

    function calculateMul(dataArr) {
        function getMul(numStr, item) {
            var res = '';
            var addNum = 0;

            for(var i = numStr.length - 1; i >= 0; --i) {
                var itemStr = (item * numStr[i] + addNum).toString();
                if (itemStr.length > 1) {
                    addNum = +itemStr[0];
                    res = itemStr[1] + res;
                } else {
                    addNum = 0;
                    res = itemStr[0] + res;
                }
            }

            res = addNum === 0 ? res : addNum + res;

            return res;
        }

        function getformatNum(numStr, index) {
            for(var i = 0; i < index; ++i) {
                numStr = numStr + '0';
            }

            return numStr;
        }

        function addTwoNum(strA, strB) {
            var res = '';
            var addNum = 0, itemA, itemB;
            strA = strA.split('').reverse().join("");
            strB = strB.split('').reverse().join("");

            for(var i = 0; i < strB.length; ++i) {
                if (strA[i] === void 0) {
                    itemA = 0;
                } else {
                    itemA = +strA[i];
                }
                itemB = +strB[i];
                var itemStr = (itemB + itemA + addNum).toString();
                if (itemStr.length > 1) {
                    addNum = +itemStr[0];
                    res = itemStr[1] + res;
                } else {
                    addNum = 0;
                    res = itemStr[0] + res;
                }
            }

            res = addNum === 0 ? res : addNum + res;

            return res;
        }

        var itemArr = dataArr[1].split('').map(function(item) {
            return +item;
        }).reverse();
        var originNum = dataArr[0];

        var res = itemArr.reduce(function(prev, item, index) {
            var numStr = getMul(originNum, item);
            var num = getformatNum(numStr, index);

            prev = addTwoNum(prev, num);

            return prev;
        }, '0');

        return res;
    }
}







