//拓扑排序，环检测，深搜
//可以出现重复方向边，如输入案例
function EdgeNode(id) {
    if (!(this instanceof EdgeNode)) {
        return new EdgeNode(id);
    }
    this.id = id;
    this.indegree = 0;
    this.afters = [];
}

function topSort(dataArr) {
    function getPicture(dataArr) {
        return dataArr.reduce(function (stock, good) {
            stock[good[0]] === void 0 ? stock[good[0]] = EdgeNode(good[0]) : null;
            good.slice(1).forEach(function (element) {
                stock[element] === void 0 ? stock[element] = EdgeNode(element) : null;
                ++ stock[element].indegree;
                stock[good[0]].afters.push(stock[element]);
            });
            return stock;
        }, {});
    }
    function getZeroNodes(picture) {
        return Object.keys(picture).reduce(function(prev, item) {
            if (picture[item].indegree === 0) {
                prev.push(picture[item]);
            }
            return prev;
        }, []);
    }
    function hasAllNode(iteratorArr, dataArr) {
        for(var i = 0; i < dataArr.length; ++i) {
            var goodArr = dataArr[i];
            for(var j = 0; j < goodArr.length; ++j) {
                if(iteratorArr.indexOf(goodArr[j]) === -1) {
                    return false;
                }
            }
        }
        return true;
    }

    var picture = getPicture(dataArr);
    var zeroNodeArr = getZeroNodes(picture);
    var iteratorArr = [];

    while (zeroNodeArr.length !== 0) {
        var node = zeroNodeArr.pop();
        iteratorArr.push(node.id);
        node.afters.forEach(function(item) {
            -- item.indegree;
            if (item.indegree === 0) {
                zeroNodeArr.push(item);
            }
        });
    }

    var res = hasAllNode(iteratorArr, dataArr);

    return res;
}

var edges = [
    ['two', 'three'],
    ['four', 'six'],
    ['one', 'three'],
    ['two', 'four'],
    ['six', 'nine'],
    ['five', 'seven'],
    ['five', 'eight'],
    ['five', 'nine'],
    ['seven', 'eight'],
    ['eight', 'nine'],
    ['one', 'two'],
    ['four', 'five'],
    ['four', 'six'],
    ['three', 'six'],
    ['six', 'seven'],
    ['three', 'four']
];
var sorted = topSort(edges);
console.log(sorted);

