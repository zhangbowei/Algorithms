let arr = [{
    'name': 'level-1',
    'value': 'eve-1',
    'id': 'id-1',
    'parentId': null
}, {
    'name': 'level-2',
    'value': 'eve-2',
    'id': 'id-2',
    'parentId': 'id-1'
}, {
    'name': 'level-3',
    'value': 'eve-3',
    'id': 'id-3',
    'parentId': 'id-2'
}, {
    'name': 'level-3',
    'value': 'eve-4',
    'id': 'id-4',
    'parentId': 'id-2'
}, {
    'name': 'level-2',
    'value': 'eve-5',
    'id': 'id-5',
    'parentId': 'id-4'
}];

function convertFlatToDepth(dataArr) {
    function filterData(dataObj, exkeyArr) {
        return Object.keys(dataObj).reduce(function(prev, item) {
            exkeyArr.includes(item) ? null : prev[item] = dataObj[item];
            return prev;
        }, {});
    }
    function connectData(dataObj) {
        const rawData = dataObj;

        Object.keys(rawData).forEach(function(good) {
            rawData[good].forEach(function(element) {
                element.children = rawData[element.id];
            });
        });

        return rawData;
    }

    const depthData = dataArr.reduce(function(stock, good) {
        const data = filterData(good, ['parentId']);
        stock[good.parentId] = stock[good.parentId] ? stock[good.parentId].concat([data]) : [data];
        return stock;
    }, {});

    return connectData(depthData)[null];
}

console.log(JSON.stringify(convertFlatToDepth(arr)));