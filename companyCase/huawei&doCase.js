//test input
var input = `0x31, 0x16, 0x49, 0x32, 0xF4`;
input = input.split('\n');

//r1.close: format Data
/* */
// function formatData(rawData) {
//     return rawData.map(function (element, order) {
//         return element.map(function (item, index) {
//             //Depending on the Title
//             // return (order > 1 && index === 0) ? item : +item;
//             return +item;
//         });
//     });
// }

var data = input.map(function (order) {
    return order.split(',').map(function(item) {
        return item.split('0x')[1];
    });
});

console.log(productNum(data[0]));


function productNum(dataArr) {
    return dataArr.reduce(function(prev, item) {
        return prev.concat([item.split('').reverse().map(function(word) {
            return word.toLowerCase() === 'f' ? '' : word;
        }).join('')]);
    }, []).join('');
}
/* !!注意：

    看行内有空格没, 没有空格即单数，后续data[0] = ['123'], 要写成data[0][0]
    '32'.split(' ') = ['32']

     牛客网可能测试样例是 换行，输入不换行；随机应变
*/
//split dataArr

//test input
var input = `13abb4cd`;
input = input.split('\n');

//r1.close: format Data
/* */
// function formatData(rawData) {
//     return rawData.map(function (element, order) {
//         return element.map(function (item, index) {
//             //Depending on the Title
//             // return (order > 1 && index === 0) ? item : +item;
//             return +item;
//         });
//     });
// }
var data = input[0];

console.log(productOriginStr(data));


//题目：
//大化小，大范围想不通就举例，(因为不是老鸟，宏观看不清很正常)
//带例子，每次输入就那几种情况，逐个考虑。
var inputArr = [
    `a11b`,
    `aabbbaa`,
    `aabb`,
    `aaa`,
    `a11a`,
    `a04b`,
    `a1b`,
    `aaaaaaaa`,
    `aaaaaaaa`,
];

inputArr.forEach(function (input, index) {
    console.log('input: ', input);
    doIt(input.split('\n'));
});

//submit this
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                // return (index === 0) ? item : +item;
                return item;
            });
        });
    }

    var data = formatData(input);
    console.log(convertStr(data[0][0]));

    function convertStr(rawData) {
        function isNumber(item) {
            return item >= '0' && item <= '9';
        }
        function isWord(item) {
            return item >= 'a' && item <= 'z';
        }
        function isLawful(dataArr) {
            function endPass(dataArr) {
                return isNumber(dataArr.slice(-1)[0]) ? false : true;
            }

            if (!endPass) return false;

            var repeatPass = (function () {
                var count = 0, word;
                return function (item) {
                    if (word === void 0 && isWord(item)) {
                        word = item;
                        ++count;
                    } else if (word !== void 0 && item === word) {
                        ++count;
                    } else if (word !== void 0 && item !== word) {
                        count = 1;
                        isNumber(word) ? word = void 0 : word = item;
                    }

                    return count === 3 ? false : true;
                };
            })();

            var betweenPass = (function () {
                var word, flag = false;
                return function (item) {
                    var pass = true;

                    if (word === void 0 && isWord(item)) {
                        word = item;
                    } else if(word !== void 0 && isNumber(item)){
                        flag = true;
                    } else if (word !== void 0 && isWord(item)) {
                        if (flag) {
                            pass = !(item === word);
                        }
                        word = item;
                        flag = false;
                    }
                    return pass;
                };
            })();

            var scopeNumPass = (function() {
                var count = '';
                return function (item) {
                    var temp = count;

                    if (isNumber(item)) {
                        count+= item;
                    } else if (isWord(item)) {
                        count = '';
                    }

                    var res = (temp === '' || +temp > 2 || isNumber(item)) ? true : false;
                    // if (res === false)
                    //     console.log('false');
                    return res;
                };
            })();
            var passArr = [repeatPass, betweenPass, scopeNumPass];

            return dataArr.reduce(function (stock, good) {
                if (!stock) {
                    dataArr.length = 0;
                    return false;
                }
                return passArr.reduce(function (box, fn, index) {
                    return box && fn(good);
                }, true);
            }, true);
        }

        function parseStr(dataArr) {
            var getNumStr = (function () {
                var num = '';
                return function (item) {
                    var temp = num === '' ? 1 : +num;
                    if (isNumber(item)) {
                        num += item;
                    }
                    if (isWord(item)) {
                        num = '';
                    }
                    return temp;
                };
            })();
            var makeStr = function (word, num) {
                var res = '';
                for (var i = 0; i < num; ++i) {
                    res += word;
                }
                return res;
            }

            return dataArr.reduce(function (prev, item) {
                var num = getNumStr(item);

                return isWord(item) ? prev + makeStr(item, num) : prev;
            }, '');
        }

        var dataArr = rawData.split('');

        return isLawful(dataArr) ? parseStr(dataArr) : '!error';
    }
}
//题目：
var input = `<64 00 10><0x00> <0x03>
<64 00 10><0xff00> <0xff00>
<64 00 10><0x02> <0x02>
<64 00 20><0x00> <0x03>
<55 00 10><0x02> <0x03>
`;

//
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
var inputArr = [
    `cdefg2200`,
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
        return rawData;
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(productStr(data[0]));
    // print('your function');
    function productStr(data) {
        function isLawful(str) {
            function lenPass(str) {
                return str.length > 20 ? false : true;
            }
            function wordPass(str) {
                var res = str.match(/[^0-9a-zA-Z]/);
                return res === null ? true : false;
            }

            return [lenPass, wordPass].reduce(function(prev, item) {
                var res =  prev && item(str);
                return res;
            }, true)
        }

        function getEvenStr(str) {
            return str.split('').reduce(function(prev, item, index) {
                var res = index % 2 === 0 ? prev + item : prev;
                return res;
            }, '');
        }

        var res = isLawful(data) ? getEvenStr(data) : 'Error';
        return res;
    }
}


//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
// 去除重复数字，并找到最大数。
var inputArr = [
    `423234`,
    `11223344`,
    `62453223`,
    `0000`,
    `0`,
    ``
];

inputArr.forEach(function (input, index) {
    // console.log(index);
    // console.log('input: ', input);
    doIt(input.split('\n'));
});

function doIt(input) {
    function formatData(rawData) {
        return rawData;
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(parseMaxNum(data[0]));
    // print('your function');
    function parseMaxNum(data) {
        function getPureSortData(strArr) {
            var sortArr = strArr.slice().sort();
            var noRepeatArr = sortArr.join('').replace(/(\d)\1+/g, function (all, itemA) {
                return itemA;
            }).split('');
            return noRepeatArr.reduce(function (prev, item) {
                prev[item] = 0;
                return prev;
            }, {});
        }
        function hasAllNum(strArr, psObj) {
            var cpPs = JSON.parse(JSON.stringify(psObj));
            var flag = false;
            for(var i = 0; i < strArr.length; ++i) {
                cpPs[strArr[i]] = 1;
            }

            var res = Object.keys(cpPs).reduce(function(prev, item) {
                return prev && cpPs[item] === 1;
            }, true);

            return res;
        }
        function getRes(strArr, psObj) {
            var res = [];
            var keys = Object.keys(psObj).reverse();

            keys.forEach(function(key) {
                var startIndex = strArr.indexOf(key);
                if (psObj[key] === 0 && hasAllNum(strArr.slice(startIndex), psObj)) {
                    psObj[key] = 1;
                    res.push(key);
                    res = res.concat(getRes(strArr.slice(startIndex+1), psObj));
                    keys.length = 0;
                }
            });

            return res;
        }

        var strArr = data.split('');
        var psObj = getPureSortData(strArr);
        var res = getRes(strArr, psObj);

        return res.join('');
    }
}










