const testArr = [{
    "k1": {
        "k3ad": "df",
        "k0": {
            "user": "xia0ming",
            "age": "18"
        },
    },
    "ke.name": "danshi"
}, {
    "k1": {
        "k3ad": "dfsdf",
        "k0": {
            "user": "xia0ming",
            "age": "28"
        },
    },
    "ke.name": "dadfnshi"
}];

const res = [{
    "k1.k3ad": "df",
    "ke.name": "danshi"
}, {
    "k1.k3ad": "dfsdf",
    "ke.name": "dadfnshi"
}];

function convertToFlat(dataArr, pathArr) {
    function getConfData(data, option) {
        const raw = data;
        const conf = option;
        const nameArr = conf.match(/^(\w+)\.(.+)$/);

        return data[conf] ? data[conf] : (nameArr ? getConfData(data[nameArr[1]], nameArr[2]) : undefined);
    }

    const rawArr = dataArr.slice();
    const confArr = pathArr.slice();

    return rawArr.reduce(function(stock, good, tag) {
        return stock.concat([confArr.reduce(function(box, element, order) {
            return box.concat([{[element]: getConfData(good, element)}]);
        }, [])]);
    }, []);

}
console.log(convertToFlat(testArr, ["k1.k3ad","ke.name"]));
