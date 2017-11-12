//找结构，找边界，找次数，找方法(排列/组合)
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    // `abcd12345ed125ss123058789`,
    // `abcd`,
    // `12345788  88888`,
    // `a1234ba1235`,
    // `adfasfsadfas`,
    // `  `,
    `12345a12345a12345a`
    // ``
    // `a1b2c3`,
    // `a0000009fdsafdc9932993f333333333`
    // `''`,
    // ``
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
            // return good.split(' ').map(function (item, index) {
            // 视情况而定，'32'.split(' ') = ['32']
            // return (index === 0) ? item : +item;
            // });
        });
        // return rawData;
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findMaxSeq(data[0]));
    function findMaxSeq(dataStr) {
        function getNumSeq(str) {
            // str = str.replace(/\s/g, '');
            var res = str.match(/\d{1,}/g);
            return res;
        }

        function isLawful(str) {
            var numArr = str.split('').map(function (item) {
                return +item;
            });

            var res = true;
            var standardNum = numArr[0];
            for (var i = 1; i < numArr.length; ++i) {
                if (numArr[i] !== ++standardNum) {
                    res = false;
                    break;
                }
            }

            return res;
        }
        function getMaxItem(dataArr) {
            var max = 0, res;

            for (var i = 0; i < dataArr.length; ++i) {
                if (max <= dataArr[i]) {
                    max = dataArr[i].length;
                    res = dataArr[i];
                }
            }

            return res;
        }
        // function hasTwoEqual(lawArr, maxItem) {
        //     var count = 0;
        //     for(var i = 0; i < lawArr.length; ++i) {
        //         if (lawArr[i].length === maxItem.length) {
        //             ++count;
        //         }
        //         if (count === 2) {
        //             return true;
        //         }
        //     }

        //     return false;
        // }
        function getOutput(data) {
            return [data, data.length].join('\n');
        }

        var numStrArr = getNumSeq(dataStr);
        // var lawArr = numStrArr.filter(function(item) {
        //     return isLawful(item);
        // });
        if (numStrArr === null) {
            return 0;
        }
        var lawArr = numStrArr.slice();
        var maxItem = getMaxItem(lawArr);
        var res = getOutput(maxItem);

        return res;
    }
}





