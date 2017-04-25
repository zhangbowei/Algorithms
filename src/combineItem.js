function combineItem(originArr) {
    const rawArr = originArr.slice();

    return rawArr.reduce(function(stock, good, tag) {
        return stock.concat(good.reduce(function(box, element, order) {
            let location = tag;  //即便是内部函数，也不要改变外层函数变量值，切记!
            return box.concat((++location) === rawArr.length - 1? rawArr[location].reduce(function(prev, item, index) {
                return prev.concat([[element, item].join('')]);
            }, []) : []);
        }, []));
    }, []);
}

const res = combineItem([["a","b","c"],["d","e"]]);