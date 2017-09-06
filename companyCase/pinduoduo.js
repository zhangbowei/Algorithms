//找结构，找边界，找次数，找方法(排列/组合)
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `1 1
10 10 10 10
0 1001
0 12`,
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

            /* [^\s]+用+号，用*不匹配会填充''.*/
            var res = good.match(/[^\s]+/g);
            return res.map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
        // return rawData;
    }

    var data = formatData(input);
    console.log(processBearInfor(data));
    //小心，有时候90%，因为空串不输出
    function processBearInfor(dataArr) {
        function getSortBear(dataArr) {
            return dataArr.sort(function(a, b) {
                var res = b[0] - a[0];
                if (res !== 0) {
                    return res;
                } else {
                    return a[2] - b[2];
                }
            });
        }
        function getRemain(foodArr) {
            foodArr.sort(function(a, b) {
                return a - b;
            });

            return function (data) {
                for(var i = foodArr.length; i >= 0; --i) {
                    if (foodArr[i] <= data) {
                        data = data - foodArr[i];
                        foodArr.splice(i, 1);
                    }
                    if (data <=0 ) {
                        break;
                    }
                }

                return data;
            }
        }
        var bearArr = dataArr.slice(2).map(function(item, index) {
            return item.concat([index]);
        });
        var sortBear = getSortBear(bearArr);
        var sugarArr = dataArr[1];
        var getLast = getRemain(sugarArr);

        var bearInfor = bearArr.reduce(function(prev, item) {
            prev.push([item[2], getLast(item[1])]);
            return prev;
        }, []);
        var res = bearInfor.sort(function(a, b) {
            return a[0] - b[0];
        }).map(function(item) {
            return item[1];
        });

        return res;
    }
}





