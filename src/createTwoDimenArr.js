// function createSoleDimenArr(count) {
//     return new Array(count+1).join().split('').reduce(function(prev, item, index) {
//         return prev.concat([index]);
//     }, []);
// }
function createSoleDimenArr(count, initData) {
    var res = [];
    for (var i = 0; i < count; ++i) {
        res.push(initData || 0);
    }
    return res;
}
function createTwoDimenArr(row, column) {
    return createSoleDimenArr(row).map(function (good, tag) {
        return createSoleDimenArr(column).map(function (element, order) {
            return 0;
        });
    });
}

console.log(createTwoDimenArr(10, 20));



