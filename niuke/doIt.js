//找结构，找边界，找次数，找方法(排列/组合)
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    `5 7
1 2 3 4 5
Q 1 5
U 3 6
Q 3 4
Q 4 5
U 4 5
U 2 9
Q 1 5`,
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
    //小心，有时候90%，因为空串不输出
    if (data[0] !== '') {
        // console.log(findMaxChildStr(data[0]));
        // print('your function');
    }
}





