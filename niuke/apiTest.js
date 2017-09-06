function test(fn) {
    var dataArr = [
        ['4', '11119']
    ];
    dataArr.forEach(function (data) {
        console.log(fn(data[0], data[1]));
    });
}
test(addTwoNum);
function addTwoNum(strA, strB) {
    var res = '';
    var addNum = 0;

    for(var i = strB.length - 1; i >= 0; --i) {
        if (strA[i] === void 0) {
            strA[i] = '0';
        }
        var itemStr = (+strA[i] + +strB[i]).toString();
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
