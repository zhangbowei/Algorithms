//组合情况。 Math.pow(2, n) = C(n, 0) + C(n, 1) + ... + C(n, n)
//这里不需要C(n, 0) 所以 -1
var input = [6, 2, 1];
combination(input);
function combination(dataArr) {
    function getGroup(dataArr) {
        if (dataArr.length === 1) {
            return [dataArr];
        }
        var item = dataArr[0];
        var groupArr = getGroup(dataArr.slice(1));

        var fixNumGroup = groupArr.reduce(function (stock, good) {
            var cpGood = good.slice();
            cpGood.unshift(item);
            return stock.concat([cpGood]);
        }, []);

        var finalGroup = fixNumGroup.concat(groupArr).concat([[item]]);

        return finalGroup;

    }

    var groupArr = getGroup(dataArr);
    console.log('test');

}

