function productUtil() {
    return ['Object', 'Array'].reduce(function (prev, item) {
        prev['is' + item] = function (data) {
            return Object.prototype.toString.call(data) === ['[object ', item, ']'].join('');
        }
        return prev;
    }, {});
}

function productUtil() {
    return ['Object', 'Array'].reduce(function(prev, item) {
        prev['is' + item] = function(data) {
            return Object.prototype.toString.call(data) === ['[object ', item, ']'].join('');
        }
        return prev;
    })
}

function deepClone(data) {
    var util = productUtil();
    if (util.isObject(data)) {
        return Object.keys(data).reduce(function(prev, item) {
            prev[item] = deepClone(data[item]);
            return prev;
        }, {});
    }

    if (util.isArray(data)) {
        return data.reduce(function (prev, item) {
            prev.push(deepClone(item));
            return prev;
        }, []);
    }

    return data;

}

function judgeType(data) {
}


function deepClone(data) {
    var util = productUtil();
    if (Object.prototype.toString(data) === '[object Object]') {
        return Object.keys(data).reduce((prev, item) => {
            prev[item] = deepClone(data[item]);
            return prev;
        }, {});
    }
    if (Object.prototype.toString(data) === '[object Array]') {
        data.reduce((prev, item) => {
            prev.push(deepClone(item));
            return prev;
        }, []);
        return ;
    }
    if (util.isObject(data)) {
        return Object.keys(data).reduce(function (prev, item) {
            prev[item] = deepClone(data[item]);
            return prev;
        }, {});
    }
    if (util.isArray(data)) {
        return data.reduce(function (prev, item) {
            prev.push(deepClone(item));
            return prev;
        }, []);
    }
    return data;
}

var input = [{ a: [1, 2, '1'] }, 1, 2];
var res = deepClone(input);
console.log(res === input, res);
// 深拷贝原始数据
// var dataSource = JSON.parse(JSON.stringify(source));