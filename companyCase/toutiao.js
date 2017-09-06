var input = [], line;
var count = 0;
var lineNum;

for (var i = 0; ; ++i) {

    ++count;
    line = read_line();
    if (!line) {
        break;
    }
    //每组一行，lineNum = 0；
    lineNum = +line;
    input.push(line);
    for (var j = 0; j < lineNum; ++j) {
        input.push(read_line());
    }
    doIt(input);
    initAll();
}

function initAll() {
    input = [];
}

function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
            /* [^\s]+用+号，用*不匹配会填充''.*/
            // var res = good.match(/[^\s]+/g);
            // return res.map(function (item, index) {
            //     // 视情况而定，'32'.split(' ') = ['32']
            //     return +item;
            // });
            // return rawData;
        });
    }

    var data = formatData(input);
    print(findOutPoint(data.slice(1)));
    //小心，有时候90%，因为空串不输出
    function findOutPoint(dataArr) {
        function filterIntPoint(inforArr, point) {
            return inforArr.filter(function (item) {
                if (item[0] < point[0] && item[1] < point[1]) {
                    return false;
                }
                return true;
            });
        }
        function filterOutPoint(inforArr, point) {
            for (var i = 0; i < inforArr.length; ++i) {
                if (inforArr[0] > point[0] && inforArr[1] > point[1]) {
                    return true;
                }
            }
            return false;
        }
        function getSortInfor(infor) {
            return infor.slice().sort(function(a, b) {
                return a[0] - b[0];
            });
        }
        function getOutput(infor) {
            return infor.reduce(function(prev, item) {
                return [prev, item.join(' ')].join('\n');
            }, '');
        }

        var infor = dataArr.reduce(function (stock, good) {
            stock = filterIntPoint(stock, good);
            return filterOutPoint(stock, good) ? stock : stock.concat([good]);
        }, []);

        var sortInfor = getSortInfor(infor);
        var res = getOutput(sortInfor);

        return res;
    }

}
//
var input = [], line;
var count = 0;
var lineNum;

for (var i = 0; ; ++i) {

    ++count;
    line = read_line();
    if (!line) {
        break;
    }
    //每组一行，lineNum = 0；
    lineNum = +line;
    for (var j = 0; j < lineNum; ++j) {
        doIt()(input);
    }
    initAll();
}

function initAll() {
    input = [];
}

function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
            /* [^\s]+用+号，用*不匹配会填充''.*/
            // var res = good.match(/[^\s]+/g);
            // return res.map(function (item, index) {
            //     // 视情况而定，'32'.split(' ') = ['32']
            //     return +item;
            // });
            // return rawData;
        });
    }

    var data = formatData(input);
    print(findOutPoint(data.slice(1)));
    //小心，有时候90%，因为空串不输出
    function findOutPoint(dataArr) {
        function filterIntPoint(inforArr, point) {
            var flag = true;
            var cpArr = inforArr.slice();
            cpArr = cpArr.filter(function (item) {
                if (item[0] < point[0] && item[1] < point[1]) {
                    return false;
                }
                if (item[0] > point[0] && item[1] > point[1]) {
                    flag = false;
                    cpArr.length = 0;
                }
                return true;
            });
            inforArr = flag ? cpArr.concat([point]) : inforArr;
            return inforArr;
        }
        function getSortInfor(infor) {
            return infor.slice().sort(function(a, b) {
                return a[0] - b[0];
            });
        }
        function getOutput(infor) {
            return infor.reduce(function(prev, item) {
                return [prev, item.join(' ')].join('\n');
            }, '');
        }

        var infor = dataArr.reduce(function (stock, good) {
            var res = filterIntPoint(stock, good);
            return res;
        }, []);

        var sortInfor = getSortInfor(infor);
        var res = getOutput(sortInfor);

        return res;
    }

}



