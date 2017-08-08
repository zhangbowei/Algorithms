/**
 * !!不支持ES6
 * 1.箭头函数 =>
 * 2. includes
 *
 * !!注意
 * 1. 大小写 (trim， toLowerCase)
 * 2. console.log间自带换行符, console.log( ，)自带空格
 * 3. 输入line为字符串，该转(+line)就转
 * 4. 牛客网不支持换行(用这个测试输出)：
 * console.log(data.map(function(item) {return item.join(' ')}).join(' $ '));
 * 或
 * console.log(JSON.stringify(data))
 * 5. 注意变量与函数不要重名
 * 6. \\转移 ()  item.split('\\').slice(-1)[0]
 */

//字符串最后一个单词的长度: 仅　一行输入
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.on('line', function (line) {
    var data = line.split(" ");
    var res = data[data.length - 1];
    console.log(res.length);
});

//计算字符个数: 多行输入(不知道什么时候停下来，要用‘close’)
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
    var data = input.map(function (item) { return item.trim().toLowerCase() });
    console.log(findWordNum(data[0], data[1]));
});
function findWordNum(rawData, keyWord) {
    return rawData.split(keyWord).length - 1;
}

//明明的随机数: 连续多组用例输入(input，等全局的相关变量要自己清零!没有就无所谓了)
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = [];
var count = 0, num;

r1.on('line', function (line) {

    if (count === 0) {
        //数字必转(默认是个string)
        num = +line;
    } else {
        //转不转看 是字符串还是数字
        input.push(+line);
        if (count === num) {
            //r1.close()这里不能用，因为是异步的!。
            console.log(input.reduce(function (prev, item) {
                return prev.indexOf(item) !== -1 ? prev : prev.concat([item]);
            }, []).sort(function (a, b) { return a - b; }).join('\n'));
            input = [];
            count = -1;
        }
    }
    ++count;

});

/*r1.on('close', function() {
    var res = input.reduce(function(prev, item) {
        return prev.indexOf(item) !== -1 ? prev : prev.concat([item]);
    }, []).sort(function(a, b) { return a - b;});

    console.log(res.join('\n'));
});*/

//字符串分割: console.log换行问题，数组生成问题。
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var count = 0;
r1.on('line', function (line) {
    console.log(formatStr(line).join('\n'));
});

function formatStr(rawData) {
    var arrData = rawData.split('');

    if (rawData.length % 8 !== 0 || rawData.length === 0) {
        var template = new Array(8 - rawData.length % 8 + 1).join('0').split('');
        arrData = arrData.concat(template);
    }
    return arrData.reduce(function (prev, item, index) {
        if ((index + 1) % 8 === 0) {
            prev.push(arrData.slice(index - 7, index + 1).join(''));
        }
        return prev;
    }, []);
}

//质数因子
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function (line) {
    console.log(getElementNum(+line).join(''));
});

function getElementNum(rawData) {
    var res = [];

    while (rawData !== 1) {
        for (var i = 2; i <= rawData; ++i) {
            if (rawData % i === 0) {
                res.push(i + ' ');
                rawData /= i;
                break;
            }
        }
    }

    return res;
}
//取近似值
var readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function (line) {
    console.log(processNum(+line));
});

function processNum(rawData) {
    return +rawData.toFixed();
}

//合并表记录 (注意\n 还是空格，调试输出结果不准，得要看测试样例)
var readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = [];
var count = 0, num;

r1.on('line', function (line) {

    if (count === 0) {
        num = +line;
    } else {
        input.push(line.split(' ').map(function (item) { return +item; }));
        if (count === num) {
            console.log(combineRepeatGroup(input));

            input = [];
            count = -1;
        }
    }
    ++count;

});
function combineRepeatGroup(rawData) {
    var objData = rawData.reduce(function (prev, item) {
        prev[item[0]] = prev[item[0]] === void 0 ? item[1] : prev[item[0]] + item[1];
        return prev;
    }, {});

    var res = Object.keys(objData).sort(function (a, b) { return a - b; }).reduce(function (prev, item) {
        return prev.concat([item, objData[item]].join(' '));
    }, []).join('\n');

    return res;
}

//购物单
//test input
var input = `1000 5
800 2 0
400 5 1
300 5 1
400 3 0
500 2 0`;
input = input.split('\n')

//r1.close: format Data
function formatData(rawData) {
    return rawData.map(function (element) {
        return element.map(function (item) { return +item; });
    });
}
var data = input.map(function (item) {
    return item.split(' ');
});
data = formatData(data);


//r1.close: process data
var money = data[0][0], num = data[0][1];
var infor = calculateInfor(data.slice(1));
var dt = parseInfor(infor);
var db = initTable(Object.keys(infor).length + 1, money + 1);
var pack = productPack(db, dt);
console.log(pack.slice(-1)[0].slice(-1)[0]);

//related function
function calculateInfor(rawData) {
    return rawData.reduce(function (stock, good, tag) {
        var order;
        order = good[2] === 0 ? tag + 1 : good[2];

        if (stock[order]) {
            stock[order].value += good[0] * good[1];
            stock[order].money += good[0];
        } else {
            stock[order] = { value: good[0] * good[1], money: good[0] };
        }

        return stock;
    }, {});
}

function initTable(row, column) {
    return new Array(row + 1).join().split('').map(function () {
        return new Array(column + 1).join().split('').map(function () { return 0 });
    });
}

function parseInfor(rawData) {
    return Object.keys(rawData).reduce(function (prev, item) {
        prev.value ? prev.value.push(rawData[item].value) : prev.value = [rawData[item].value];
        prev.money ? prev.money.push(rawData[item].money) : prev.money = [rawData[item].money];

        return prev;
    }, {});
}

function productPack(db, dt) {
    db.forEach(function (good, tag) {
        good.forEach(function (element, order) {
            if (tag > 0 && order > dt.money[tag - 1]) {
                if (db[tag - 1][order - dt.money[tag - 1]] + dt.value[tag - 1] > db[tag - 1][order]) {
                    db[tag][order] = db[tag - 1][order - dt.money[tag - 1]] + dt.value[tag - 1];
                } else {
                    db[tag][order] = db[tag - 1][order];
                }
            }
        });
    });

    return db;
}

//简单错误记录, 文件 合并
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

    data = formatData(data);
    data = combineInfor(data);
    data = tidyInfor(data);
    data = sortInfor(data);
    console.log(printInfor(data, 8));

});

function formatData(rawData) {
    return rawData.map(function (element, order) {
        return element.map(function (item, index) {
            return (index === 0) ? item.split('\\').slice(-1)[0] : item;
            // return +item;
        });
    });
}



//split dataArr
function combineInfor(dataArr) {
    function whereExist(collection, document) {
        var index = -1;

        for (var i = 0; i < collection.length; ++i) {
            if (collection[i].slice(0, -1).join() === document.join()) {
                index = i;
                break;
            }
        }

        return index;
    }

    return dataArr.reduce(function (stock, good, tag) {
        var index = whereExist(stock, good);
        if (index === -1) {
            stock.push(good.concat([1]));
        } else {
            ++stock[index][stock[index].length - 1];
        }
        return stock;
    }, []);
}

function tidyInfor(dataArr) {
    return dataArr.reduce(function (prev, item) {
        if (item[0].length > 16) {
            item[0] = item[0].substring(item[0].length - 16);
        }
        prev.push(item);

        return prev;
    }, [])
}

function sortInfor(dataArr) {
    return dataArr.sort(function (a, b) {
        return b.slice(-1)[0] - a.slice(-1)[0];
    });
}

function printInfor(dataArr, num) {
    return dataArr.slice(0, num).reduce(function(prev, item) {
        return prev.concat([item.join('\n')]);
    }, []).join(' ');
}