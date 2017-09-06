function getKNum(originArr, k) {

    //全排列
    var productCombine = function (originArr) {
        var rawArr = originArr.slice();

        var iteratorGroup = function (originArr, data) {
            return originArr.reduce(function (prev, item) {
                for (var i = 0; i <= item.length; i++) {
                    var arr = item.slice();
                    arr.splice(i, 0, data);
                    prev.push(arr);
                };
                return prev;
            }, []);
        }

        return rawArr.reduce(function (prev, item, index) {
            index === 0 ? prev.push([item]) : prev = iteratorGroup(prev, item);
            return prev;
        }, []).map(function (item) {
            return item.join('');
        });
    };

    //分析计算结果
    var calculateK = function (str) {
        var arr = str.split('');
        return arr.reduce(function (prev) {
            arr.push(arr.shift());
            return arr.join('') === str ? ++prev : prev;
        }, 0);
    }


    var res = productCombine(originArr);

    return res.reduce(function (prev, item) {
        prev.push(calculateK(item));
        return prev;
    }, []).filter(function (item) {
        return item === k;
    }).length;
}
// console.log(getKNum(['AB', 'RAAB', 'RA'], 2));
//   console.log(getKNum(['A', 'B', 'C', 'D'], 2));
//纯粹的全排列，一个组合放在一个数组里。
function purePermutation(rawArr) {
    function getGroup(dataArr) {
        if (dataArr.length === 1) {
            return [dataArr];
        }
        var item = dataArr[0];
        var groupArr = getGroup(dataArr.slice(1));
        return groupArr.reduce(function (stock, good) {
            var res = good.reduce(function (box, element, order) {
                var clone = good.slice();
                clone.splice(order, 0, item);
                return box.concat([clone]);
            }, []).concat([good.concat([item])]);
            return stock.concat(res);
        }, []);
    }
    return getGroup(rawArr);
}

var res = purePermutation(['AB', 'RAAB', 'RA']);
console.log(res);
