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