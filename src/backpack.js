//Case 购物车
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

//Case: 双核CPU任务调度 (优化，只用2*n数组)
var readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
//var input = ''; input += line不行，\n输不进来
var input = [], count = 0, n = 2;

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
    console.log(splitData(data[1]));
    // console.log('your function');
    function splitData(dataArr) {
        function deliverTask(taskA, taskB) {
            return ~~(Math.abs(taskA - taskB) / 2);
        }

        // function createSingleArr(count) {
        //     return new Array(count + 1).join().split('').map(function () {
        //         return 0;
        //     });
        // }
        function backpack(w, v, room) {
            var rel1 = [];
            for (var i = 0; i <= room; i++) { //这里i表示weight

                    rel1.push(0);

            }
            for (var i = 1; i < w.length+1; i++) {
                for (var j = room; j > 0; j--) {
                    if (j - w[i-1] >= 0) {
                        rel1[j] = Math.max(rel1[j - w[i-1]] + v[i-1], rel1[j]);
                    }
                }
            }
            return rel1;
        }
        var tidyData = dataArr.slice().map(function (item) {
            return item / 1024;
        });
        var sum = tidyData.reduce(function (prev, item) {
            return prev + item;
        }, 0);


        var bp = backpack(tidyData, tidyData, Math.floor(sum / 2));
        var taskA = bp.slice(-1)[0];
        var taskB = sum - taskA;

        // return (taskB - deliverTask(taskA, taskB)) * 1024;
        return (sum - taskA) * 1024;
    }
}
