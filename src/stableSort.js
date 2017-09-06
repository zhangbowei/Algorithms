//稳定排序
var inputArr = [
    `axm5n42xbbsh1gmuezf52ffqravf7fbn1pcraf71urxafwb3cbe116arkq94cxhq8qfl788`,
    `8749r6k4nugdm04p5b1yhegi8hiq3937`
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
        // return rawData.map(function (good) {
        //     return good.split(' ').map(function (item, index) {
        //         // 视情况而定，'32'.split(' ') = ['32']
        //         return item;
        //     });
        // });
        return rawData;
    }

    var data = formatData(input);
    // console.log('your function');
    console.log(parseMaxLenNum(data[0]));
    function parseMaxLenNum(dataStr) {
        function getSameStr(dataArr) {
            var len = dataArr[0].length;

            return dataArr.filter(function (item) {
                return item.length === len;
            });
        }

        var strArr = dataStr.match(/\d+/g).map(function (item, index) {
            return { val: item, length: item.length, index };
        }).sort(function (a, b) {
            var resA = b.length - a.length;
            if (resA === 0) {
                return a.index - b.index;
            } else {
                return resA;
            }
        }).map(function(item) {
            return item.val;
        });
        var sameArr = getSameStr(strArr);

        return [sameArr.join(''), sameArr[0].length].join();
    }
}





