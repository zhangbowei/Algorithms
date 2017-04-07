var x = 5;
var k = 111111111;
var num = 0;

//By zhangbowei. (slowly running code)
/*var template = x.toString(2).split('').reduce(function (prev, item) {
    item === '1' ? prev.push(['0']) : prev.push(['0', '1']);
    return prev;
}, [])

var produceNewNum = function (arr, conf) {
    var rawArr = arr.slice();
    return rawArr.reduce(function (prev, item) {
        if (item.length === rawArr.slice(-1)[0].length) {
            conf.forEach(function (arg) {
                prev.push(item + arg);
            })
        }
        return prev;
    }, rawArr.slice());
};

var res = template.reduce(function (prev, item, index) {
    index === 0 ? prev = prev.concat(item) : prev = produceNewNum(prev, item);
    return prev;
}, []);

var endRes;
for (var i = 0; i < res.length; i++) {
    var item = res[i].split('').reverse().join('');
    if (item[0] === '1') {
        if(++num === k) {
            endRes = parseInt(item, 2);
            break;
        }
    }
    if (i === res.length - 1) {
        res =  produceNewNum(res, ['0', '1']);
    }
}

console.log(endRes);
*/