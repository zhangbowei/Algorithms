function getKNum(originArr, k) {

    var productCombine  = function(originArr) {
        var rawArr = originArr.slice();

        var iteratorGroup = function(originArr, data) {
            return originArr.reduce(function(prev, item) {
                for(var i=0; i <= item.length; i++) {
                    var arr = item.slice();
                    arr.splice(i, 0, data);
                    prev.push(arr);
                };
                return prev;
            }, []);
        }

        return rawArr.reduce(function(prev, item, index) {
            index === 0 ? prev.push([item]) : prev = iteratorGroup(prev, item);
            return prev;
        }, []).map(function(item) {
            return item.join('');
        });
    };

    var calculateK = function(str) {
        var arr = str.split('');
        return arr.reduce(function(prev) {
            arr.push(arr.shift());
            return arr.join('') === str ? ++prev : prev;
        }, 0);
    }


    var res = productCombine(originArr);

    return res.reduce(function(prev, item) {
        prev.push(calculateK(item));
        return prev;
    }, []).filter(function(item) {
        return item === k;
    }).length;
}
  console.log(getKNum(['AB', 'RAAB', 'RA'], 2));
//   console.log(getKNum(['A', 'B', 'C', 'D'], 2));