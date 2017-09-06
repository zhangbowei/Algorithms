//(程序正确性未经证明)
//最小生成树 ，克鲁斯卡尔 并查集
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
var inputArr = [
    `1 2 1
2 3 1
4 5 1
8 9 1
3 9 11`,
];

inputArr.forEach(function (input, index) {
    // console.log(index);
    // console.log('input: ', input);
    doIt(input.split('\n'));
});

//submit this
/* Array.isArray(dataArr)不能用
*/
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            //用split(' ')，末位有空格，如 `75520 10708 `数组长度会多1，很难检错。
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
            /* [^\s]+用+号，用*不匹配会填充''.*/
            // var res = good.match(/[^\s]+/g);
            // return res.map(function (item, index) {
            //     // 视情况而定，'32'.split(' ') = ['32']
            //     return +item;
            // });
            // return rawData;
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(kruskal(data));
    function kruskal(dataArr) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }

        function getRoot(a, v) {
            while (a !== v[a]) {
                a = v[a];
            }
            return a;
        }

        function findMaxNum(dataArr) {
            var inforArr =  dataArr.reduce(function(prev, item) {
                return prev.concat(item.slice(0, -1));
            }, []);

            var res = Math.max.apply(null, inforArr);
            return res;
        }

        function getSortData(dataArr) {
            return dataArr.sort(function(a, b) {
                return a[2] - b[2];
            });
        }

        var num = findMaxNum(dataArr);
        var v = createSoleDimenArr(num+1).map(function(item, index) {
            return index;
        });
        var sortArr = getSortData(dataArr);

        return sortArr.reduce(function(stock, good) {
            var a = getRoot(good[0], v), b = getRoot(good[1], v);
            if (a !== b) {
                v[a] = b;
                stock += good[2];
            }
            return stock;
        }, 0);


    }
}





