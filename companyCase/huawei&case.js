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
 * 7. 尽可能不使用split而使用 正则提取，因为`75520 10708 `末位多个空格，数组长度就多一个，
     然后找不到哪里错了!!
   8. 测试样例是 回车，实际可能是空格!!
   9.`var data = formatData(input);
     if (data[0] !== '') {
    console.log(findMaxChildStr(data[0]));
    }`
    空字符串不做处理。(题目不说)
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
    return dataArr.slice(0, num).reduce(function (prev, item) {
        return prev.concat([item.join('\n')]);
    }, []).join(' ');
}

/*题目：最小公倍数*/
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
    doIt(input);
});

function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (element, order) {
            return element.map(function (item, index) {
                //Depending on the Title
                // return (order > 1 && index === 0) ? item : +item;
                return +item;
            });
        });
    }
    var data = input.map(function (item) {
        return item.split(' ');
    });


    data = formatData(data);

    var numA = data[0][0], numB = data[0][1];

    function calculateMulNum(numA, numB) {
        var public = [];

        for (var i = 2; ; ++i) {
            if (numA === 1 || numB === 1) {
                break;
            }
            if (i > Math.max(numA, numB)) {
                break;
            }
            if (numA % i === 0 && numB % i === 0) {
                public.push(i);
                numA = numA / i;
                numB = numB / i;
                i = 2;
            }
        }

        var res = public.reduce(function (prev, item) {
            return prev * item;
        }, 1);

        return res * numA * numB;
    }

    console.log(calculateMulNum(numA, numB));

}

//题目：IP地址分类
/* '0.0.0.0~0.255.255.255',
   '127.0.0.0~127.255.255.255'
   不属于分类，但仍合法；
   255.255.255.255   0.0.0.0不是合法掩码
*/
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split('~').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return item;
            });
        });
    }

    var data = formatData(input);
    console.log(parseIPInfor(data));

    function parseIPInfor(dataArr) {
        function formatTable(tableArr) {
            return tableArr.reduce(function (stock, good) {
                return stock.concat([
                    good.split('~').map(function (element) {
                        return element.split('.').map(function (item) {
                            return +item;
                        });
                    })
                ]);
            }, []);
        }
        function belongType(ip, formatTB) {
            function formatIP(ip) {
                return ip.split('.').map(function (item) {
                    return item === '' ? -1 : +item;
                });
            }
            function findType(ip, table) {
                function isType(ip, start, end) {
                    function isBelong(num, a, b) {
                        return num >= a && num <= b ? true : false;
                    }
                    var cpStart = start.slice();
                    return cpStart.reduce(function (stock, good, tag) {
                        stock = isBelong(ip[tag], good, end[tag]);
                        if (!stock) {
                            cpStart.length = 0;
                        }
                        return stock;
                    }, true);
                }
                var getType = function (head) {
                    var cpTable = table.slice();
                    return cpTable.reduce(function (type, good, tag) {
                        if (isType(ip, good[0], good[1])) {
                            //特别注意 一定要是纯函数
                            cpTable.length = 0;
                            type = tag;
                        }
                        return type;
                    }, -1);
                }

                return getType(ip);

            }

            var formatIP = formatIP(ip);
            var type = findType(formatIP, formatTB);

            return type;
        }

        function isLawfulCover(cover) {
            function formatStr(str) {
                while (true) {
                    if (str.length < 8) {
                        str = '0' + str;
                    } else {
                        break;
                    }
                }
                return str;
            }

            var flag = true;
            var dataStr = cover.split('.').map(function (item) {
                return formatStr((+item).toString(2));
            }).join('');
            // console.log(dataStr.match(/01/));
            //掩码不能全是0， 或全是1
            if (dataStr.match(/01/) !== null) {
                flag = false;
            }
            if (dataStr.match(/10/) === null) {
                flag = false;
            }

            return flag;
        }

        var table = [
            '1.0.0.0~126.255.255.255',
            '128.0.0.0~191.255.255.255',
            '192.0.0.0~223.255.255.255',
            '224.0.0.0~239.255.255.255',
            '240.0.0.0~255.255.255.255',
            '0.0.0.0~0.255.255.255',
            '127.0.0.0~127.255.255.255'
        ];
        var private = [
            '10.0.0.0~10.255.255.255',
            '172.16.0.0~172.31.255.255',
            '192.168.0.0~192.168.255.255'
        ];
        var formatTB = formatTable(table);
        var formatPR = formatTable(private);

        var prNum = 0, typeArr = [0, 0, 0, 0, 0], unlawNum = 0;
        // var test = [];

        for (var i = 0; i < dataArr.length; ++i) {
            if (isLawfulCover(dataArr[i][1])) {
                var ip = dataArr[i][0];
                var type = belongType(ip, formatTB);
                var pr = belongType(ip, formatPR);

                if (type === -1) {
                    ++unlawNum;
                } else {
                    if (pr !== -1) {
                        ++prNum;
                    }
                    if (type < typeArr.length) {
                        ++typeArr[type];
                    }
                }
            } else {
                ++unlawNum;
            }
        }
        return [typeArr.join(' '), unlawNum, prNum].join(' ');
    }

}

//题目：整数与IP地址转化
var inputArr = [
    '10.0.3.193',
    '167969729'
];

inputArr.forEach(function (input, index) {
    // console.log(index);
    // console.log('input: ', input);
    doIt(input.split(' '));
});

//submit this
/* Array.isArray(dataArr)不能用
*/
function doIt(input) {
    function formatData(rawData) {
        // return rawData.map(function (good) {
        //     return good.split('~').map(function (item, index) {
        //         // 视情况而定，'32'.split(' ') = ['32']
        //         return item;
        //     });
        // });
        return rawData;
    }

    var data = formatData(input);
    console.log(parseIPInfor(data[0]));

    function parseIPInfor(dataStr) {
        function isOriginIP(str) {
            return str.indexOf('.') === -1 ? false : true;
        }
        function convertToNum(dataStr) {
            function turnStr(num) {
                function formatStr(str) {
                    while (str.length < 8) {
                        str = '0' + str;
                    }
                    return str;
                }
                return formatStr(num.toString(2));
            }

            var dataArr = dataStr.split('.');
            return parseInt(dataArr.reduce(function (stock, good) {
                stock += turnStr(+good);
                return stock;
            }, ''), 2);
        }

        function convertToIP(dataStr) {
            function formatStr(str) {
                while (str.length % 8 !== 0) {
                    str = '0' + str;
                }
                return str;
            }
            var numStr = formatStr((+dataStr).toString(2));
            var res = [];
            var test = numStr.replace(/.{4}/g, function (all) {
                res.push(parseInt(all, 2));
                // return all;
            });
            console.log(test);
            return res.join('.');
        }

        return isOriginIP(dataStr) ? convertToNum(dataStr) : convertToIP(dataStr);
    }

}

//题目；梅花桩问题 /跳台阶变种 (正难则反 => 直扑未知数)
//test input
var inputArr = [
    `6
2 5 1 5 4 5`,
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
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(productMaxRedraiment(data[1]));
    function productMaxRedraiment(dataArr) {
        const cache = [];
        const getStep = function (num) {
            if (cache[num]) {
                return cache[num];
            }

            var res = [1];
            for (var i = 0; i < num; ++i) {
                // if (num === dataArr.length - 1) {
                //     console.log('test');
                // }
                if (dataArr[i] < dataArr[num]) {
                    if (!cache[i]) {
                        cache[i] = getStep(i);
                    }

                    res.push(cache[i] + 1);
                }
            }
            return Math.max.apply(null, res);
        }

        var len = dataArr.length;
        for (var i = 0; i < len; ++i) {
            cache[i] = getStep(i);
        }
        return Math.max.apply(null, cache);
    }
}
//题目：直扑未知数，分解结果，动态跟踪其值。
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(rabbit(data[0][0]));

    function rabbit(data) {
        var a = 1, b = 0, c = 0;
        for (var i = 2; i <= data; ++i) {
            c = c + b;
            b = a;
            a = c;
        }

        return a + b + c;
    }
}
//题目：最小编辑距离，Levenshtein Distance
//总结： 上次可能状态，上次可能状态 权重(结果)；基于他们累加得出本次.
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
    console.log(lsDistance(data));


    function lsDistance(dataArr) {
        function createSoleDimenArr(count) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(0);
            }
            return res;
        }
        function createTwoDimenArr(column, row) {
            return createSoleDimenArr(column).map(function (good, tag) {
                return createSoleDimenArr(row).map(function (element, order) {
                    if (tag === 0) return order;
                    if (order === 0) return tag;
                    return element;
                });
            });
        }

        var strA = dataArr[0], strB = dataArr[1];
        var lenA = strA.length, lenB = strB.length;
        var dp = createTwoDimenArr(lenA + 1, lenB + 1);

        for (var i = 1; i <= lenA; ++i) {
            for (var j = 1; j <= lenB; ++j) {
                if (strA[i - 1] === strB[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                }
            }
        }

        return dp[lenA][lenB];
    }
}
//题目：验证密码
function checkPassword(dataStr) {
    function passLen(dataStr) {
        return dataStr.length > 8 ? true : false;
    }
    function passWord(dataStr) {
        var hasNum = /\d/;
        var hasLowWord = /[a-z]/;
        var hasUpWord = /[A-Z]/;
        var hasOther = /[\W]/;

        var res = [hasNum, hasLowWord, hasUpWord, hasOther].reduce(function (prev, item) {
            if (item.test(dataStr)) {
                ++prev;
            }
            return prev;
        }, 0);
        return res > 2 ? true : false;
    }
    function passSpace(dataStr) {
        var hasSpace = /\s/;
        return hasSpace.test(dataStr) ? false : true;
    }

    function passRepeat(dataStr) {
        var hasRepeat = /(.{3,}).*\1/;
        return hasRepeat.test(dataStr) ? false : true;
    }
    function getOutput(data) {
        return data ? 'OK' : 'NG';
    }

    var res = [passLen, passSpace, passWord, passRepeat].reduce(function (prev, item) {
        return prev && item(dataStr);
    }, true);

    return getOutput(res);
}

//题目：最长回文检测 (此方法有问题cddc情况未考虑， cdadc考虑)
function doIt(input) {
    function formatData(rawData) {
        return rawData;
    }

    var data = formatData(input);
    if (data !== '') {
        console.log(findMaxChildStr(data[0]));
    }
    function findMaxChildStr(dataStr) {
        if (dataStr === '') return;
        var res = [];
        for (var i = 1; i < dataStr.length; ++i) {
            var max = 0;
            for (var j = 1; i - j >= 0; ++j) {
                if (dataStr.substring(i - j, i + 1) === dataStr.substring(i, i + j + 1).split('').reverse().join("")) {
                    max = j;
                } else {
                    break;
                }
            }
            res.push(max);
        }
        return Math.max.apply(null, res) * 2 + 1;
    }

}

//题目：最大连续bit
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (item) {
            return +item;
        })
    }

    var data = formatData(input);
    if (data[0] !== '') {
        console.log(findSeqOneLen(data[0]));
    }
    function findSeqOneLen(dataNum) {
        function getBinary(num) {
            return num.toString(2);
        }
        function getOneLen(str) {
            return str.match(/(1)\1*/g).reduce(function (prev, item) {
                return item.length > prev ? item.length : prev;
            }, 0);
        }

        var dataStr = getBinary(dataNum);
        var len = getOneLen(dataStr);

        return len;
    }
}

//题目：IP地址是否合法
r1.on('line', function (line) {
    line = line.trim();
    var ip = /^(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])$/g;
    if (ip.test(line))
        console.log("YES")
    else
        console.log("NO")
})

//题目：棋盘  分治
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ').map(function (item, index) {
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(findMethod(data[0][0], data[0][1]));
    function findMethod(n, m) {
        if (n === 0 && m === 0) {
            return 0;
        }
        if (n === 0 || m === 0) {
            return 1;
        }
        return findMethod(n - 1, m) + findMethod(n, m - 1);
    }
}

//题目：蛇形矩阵
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (item, index) {
            // 视情况而定，'32'.split(' ') = ['32']
            return +item;
        });
    }

    var data = formatData(input);
    productSnakeCube(data[0]);
    function productSnakeCube(dataNum) {
        function getNum(n) {
            return (1 + n) * n / 2;
        }
        var dp = [];

        for (var i = 1; i <= dataNum; ++i) {
            dp[i] = getNum(i);
        }
        console.log(dp.slice(1).join(' '));

        for (var i = 2; i <= dataNum; ++i) {
            for (var j = 1; j <= dataNum - i + 1; ++j) {
                dp[j] = dp[j + 1] - 1;
            }
            console.log(dp.slice(1, dataNum - i + 2).join(' '));
        }

    }
}

//题目：扑克牌
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    //var line="4 4 4 4-joker JOKER";
    var data = line.trim().split("-");
    var str1 = data[0];
    var str2 = data[1];
    var arr1 = str1.split(" ");
    var arr2 = str2.split(" ");
    var len1 = arr1.length;
    var len2 = arr2.length;
    var res;
    //比较个子大小
    if (len1 != len2) {
        if (str1 === "joker JOKER" || str2 === "joker JOKER") {
            res = "joker JOKER";
        } else if (len1 == 4 || len2 == 4) {
            res = (len1 == 4 ? str1 : str2);
        } else {
            res = "ERROR"
        }
    } else {
        var temp = transfer(arr1[0]) > transfer(arr2[0]) ? arr1 : arr2;
        res = temp.join(" ");
    }
    console.log(res);
});
function transfer(str) {
    switch (str) {
        case "J": return 11; break;
        case "Q": return 12; break;
        case "K": return 13; break;
        case "A": return 14; break;
        case "2": return 15; break;
        case "joker": return 16; break;
        case "JOKER": return 17; break;
        default: return str - 0; break;
    }
}
//题目：公共子串
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (item, index) {
            // 视情况而定，'32'.split(' ') = ['32']
            return item;
        });
    }

    var data = formatData(input);
    console.log(findPublicStr(data));

    function findPublicStr(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }
        function createTwoDimenArr(column, row) {
            return createSoleDimenArr(column).map(function (good, tag) {
                return createSoleDimenArr(row).map(function (element, order) {
                    return 0;
                });
            });
        }
        function getMaxIndex(dpArr) {
            var endPoint = dpArr.reduce(function (stock, good, tag) {
                var res = good.reduce(function (box, element, order) {
                    if (box.val < element) {
                        box.index = order;
                        box.val = element;
                    }
                    return box;
                }, { val: 0, index: -1 });
                if (res.val > stock.val) {
                    stock.val = res.val;
                    stock.row = res.index;
                }
                return stock;
            }, { val: 0, row: -1 });

            return endPoint;
        }
        function getOutput(point, str) {
            var res = str.substr(point.row - point.val, point.val);
            return res;
        }

        var strA, strB;
        if (data[0].length > data[1].length) {
            strA = data[1];
            strB = data[0];
        }
        if (data[0].length <= data[1].length) {
            strA = data[0];
            strB = data[1];
        }
        var column = strA.length + 1, row = strB.length + 1;
        var dp = createTwoDimenArr(column, row);
        for (var i = 1; i < column; ++i) {
            for (var j = 1; j < row; ++j) {
                if (strA[i - 1] === strB[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
            }
        }
        var endPoint = getMaxIndex(dp);
        var res = getOutput(endPoint, strB);

        return res;
    }


}
//题目：连通性 并查集
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(judgeLink(data));


    function judgeLink(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData = initData || 0);
            }
            return res;
        }
        function getRelatedInfor(dataArr) {
            var dp = [];
            dataArr.forEach(function (data) {
                var tagA = data[0], tagB = data[1];
                if (dp[tagA] === void 0 && dp[tagB] === void 0) {
                    dp[tagA] = tagA;
                    dp[tagB] = tagA;
                }
                if (dp[tagA] !== void 0 && dp[tagB] === void 0) {
                    dp[tagB] = dp[tagA];
                }
                if (dp[tagA] === void 0 && dp[tagB] !== void 0) {
                    dp[tagA] = dp[tagB];
                }
                if (dp[tagA] !== void 0 && dp[tagB] !== void 0) {
                    dp = dp.map(function (item) {
                        return item === dp[tagB] ? dp[tagA] : item;
                    });
                }
            });

            return dp;
        }
        function isPassAll(inforArr, pointNum) {
            var val = inforArr[1], flag = true;
            for (var i = 1; i <= pointNum; ++i) {
                if (inforArr[i] !== val) {
                    flag = false;
                    break;
                }
            }

            return flag;
        }
        function getOutput(flag) {
            return flag ? 'YES' : 'NO';
        }
        var pointNum = dataArr[0][0];
        var borderArr = dataArr.slice(1);
        var inforArr = getRelatedInfor(borderArr);
        var flag = isPassAll(inforArr, pointNum);

        return getOutput(flag);

    }
}

//题目：滑动窗口最大值
//写程序要对  输入的边界条件 心里清楚，就好比开发网站对 安全问题 心知肚明。
function maxInWindows(num, size) {
    var point = +size, dataBase = num;
    var res = [];
    if (point === 0) return res;
    for (var i = 0; i <= dataBase.length - point; ++i) {
        res.push(Math.max.apply(null, dataBase.slice(i, i + point)));
    }

    return res;
}

//题目：二维数组中查找
function Find(target, array) {
    var rows = array.length, cols = array[0].length;
    var i = rows - 1, j = 0, key = target;

    while(true) {
        if (i < 0 || j >= cols) {
            return false;
        }
        if (array[i][j] > key) {
            -- i;
            continue;
        }
        if (array[i][j] < key) {
            ++ j;
            continue;
        }
        if (array[i][j] === key) {
            return true;
        }
    }
}