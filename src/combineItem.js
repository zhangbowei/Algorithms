const res = combineItem([["a", "b", "c"], ["d", "e"]]);
console.log(res);

function combineItem(dataArr, ruleConfFn) {
    const rawArr = dataArr.slice();
    const getIndex = ruleConfFn ? ruleConfFn : function (index) {
        return index === rawArr.length - 1 ? 0 : index + 1;
    };

    return rawArr.reduce(function (stock, good, tag) {
        return stock.concat(good.reduce(function (box, element, order) {
            return box.concat(rawArr[getIndex(tag)].reduce(function (prev, item) {
                return prev.concat([[element, item].join('')]);
            }, []));
        }, []));
    }, []);
}