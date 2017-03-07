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



let result = arr.reduce(function (prev, item) {
    const insert = {
        name: item.name,
        value: item.value,
        id: item.id
    };

    prev[item.parentId] ? prev[item.parentId].push(insert) : prev[item.parentId] = [insert];
    return prev;
}, {});

for (var key in result) {
    result[key].forEach(function (item, index) {
        result[item.id] ? item.children = result[item.id] : ''
    });
}

console.log(JSON.stringify(result[null]));
