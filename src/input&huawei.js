/**
 * 问题：牛客网输出和我的一样，为什么错了？
 *
 * 因为牛客网样例输出， 回车\n是显示成空格的!!
 * 你合并结果还得用 \n，别被迷惑了
 */
//多组测试用例连续
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = [], count = 0, num;

r1.on('line', function (line) {
    //输入；记录次数
    ++count;
    input.push(line);

    if (count === 1) {
        //数字必转(默认是个string)
        //!!注意split中的空格
        num = line.split(' ').map(function (item) { return +item; })[1];
    }

    //num前有n行，则为num + n;
    if (count === num + 2) {
        doIt(input);
        initAll();
    }
});

function initAll() {
    count = 0;
    num = 0;
    input = [];
}

/**
 * @param {any} input
 *
 * For Introduction:
 * input your IDE Code
 *
 * For test:
 * console.log(JSON.stringify(data));
 * console.log(input);
 */
function doIt(input) {
    //For example:
    /*function formatData(rawData) {
        return rawData.map(function (element, order) {
            return element.map(function (item, index) {
                //Depending on the Title
                return (order > 1 && index === 0) ? item : +item;
            });
        });
    }

    var data = input.map(function (item) {
        return item.split(' ');
    });
    data = formatData(data);

    var N = data[0][0], M = data[0][1];
    var scoreArr = data[1];
    var actionArr = data.slice(2);
    ...
    */
}

//----------------------------------------------------------------------
//一组测试用例输入
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//var input = ''; input += line不行，\n输不进来
var input = [], flag = true;

r1.on('line', function (line) {
    input.push(line);

});

r1.on('close', function () {
	var data = input.map(function (item) {
      return item.split(' ');
    });

    doIt();

});