/** 读题分析类型 => 看样例格式 => 提取数据(小心样例不标准)
 * => 语言描述/公式描述
 * => 发散思维(尽可能想出简单的) => 依据数据流 => 转代码
 * 注意：
 * 试着重新简单的理解题意
 * 试着转化思维，想出更简单的方法
 *
 * 问题：牛客网输出和我的一样，为什么错了？
 *
 * 因为牛客网样例输出， 回车\n是显示成空格的!!
 * 你合并结果还得用 \n，别被迷惑了
 *
 * 问题：输入复杂，搞不对？
 * 用正则匹配输入。
 *
 * 问题：90%,多输出了？
 * 过滤空字符串输入
 *
 * 问题：输出不正确？
 * for (var i = 1; i <= dataNum; ++i) {
 *     dp[i] = getNum(i);
 * }
 * console.log(dp.slice(1).join(' ')); //join会识别 dp[0]的''
 *
 * 问题：简写不支持
 * var res = {val: max, index};
 * SyntaxError: Unexpected token }
 *
 * 问题：0%
 * 给的样例 2 1 3
 * 实际是
 * 3
 * 2 1 3
 */
/*
用
function createSingleArr(count) {
            var rell = [];
             for (var i = 0; i <= count; i++) { //这里i表示weight

                     rell.push(0);
             }
            return rell;
}
下面方式容易超内存，不清楚为啥。(可能是new Array(count + 1).join()字符串太长了)
function createSingleArr(count) {
            return new Array(count + 1).join().split('').map(function () {
                return 0;
            });
}

*/
//多组测试用例连续 (每组 n > 1行)
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

function doIt(input) {

}

//----------------------------------------------------------------------
//一组测试用例输入(多行数据) =>  没有结束指示
/*
   ab
   cd
   ef
*/
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//var input = ''; input += line不行，\n输不进来
var input = [];

r1.on('line', function (line) {
    input.push(line);

});

r1.on('close', function () {
    doIt(input);
});

function doIt(input) {

}
//多组测试用例连续 (每组固定n行)
/* a123
   b456
*/

var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
//var input = ''; input += line不行，\n输不进来
var input = [], count = 0, n = 1;

r1.on('line', function (line) {
    ++count;
    input.push(line);
    if (count === n) {
        doIt(input);
        initAll();
    }
});

function initAll() {
    input = [];
    count = 0;
}

function doIt() {

}