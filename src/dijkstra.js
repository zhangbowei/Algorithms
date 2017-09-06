// (程序正确性未经证明)
//题目：城市  图 最短路径
//test input
var inputArr = [
    `5
1 2 1
2 5 1
5 4 1
4 3 1`,
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
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    console.log(dijkstra(data, 1));
    // print('your function');
    function dijkstra(dataArr, originPoint) {
        function createSoleDimenArr(count, initData) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(initData || 0);
            }
            return res;
        }
        function createTwoDimenArr(column, row) {
            return createSoleDimenArr(column).map(function (good, tag) {
                return createSoleDimenArr(row).map(function (element, order) {
                    return Infinity;
                });
            });
        }
        function createMap(dataArr, num) {
            var mapArr = createTwoDimenArr(num + 1, num + 1);
            dataArr.forEach(function (data) {
                mapArr[data[0]][data[1]] = data[2];
                mapArr[data[1]][data[0]] = data[2];
            });
            return mapArr;
        }

        function getPath(dist, path, point) {
            if (dist[point] === Infinity) {
                return null;
            }
            const mark = [];
            const iterator = function (point) {
                mark.push(point);
                if (path[point] !== -1) {
                    iterator(path[point]);
                }
            }
            iterator(point);

            const res = mark.reverse();
            return res;
        }

        var cityNum = dataArr[0][0];
        var rawData = dataArr.slice(1);
        var edgeMap = createMap(rawData, cityNum);
        var dist = createSoleDimenArr(cityNum + 1, Infinity);
        var path = createSoleDimenArr(cityNum + 1, -1);
        var pointArr = [];

        pointArr[originPoint] = 1;
        for (var i = 1; i <= cityNum; ++i) {
            dist[i] = edgeMap[originPoint][i];
        }

        for (var i = 1; i <= cityNum; ++i) {
            var min = Infinity, location = -1;

            for (var j = 1; j <= cityNum; ++j) {
                if (pointArr[j] !== 1 && dist[j] < min) {
                    min = dist[j];
                    location = j;
                    pointArr[location] = 1;
                }
            }

            if (location === -1) continue;

            for (var j = 1; j <= cityNum; ++j) {
                var len = edgeMap[location][j] + dist[location];
                if (pointArr[j] !== 1 && len < dist[j]) {
                    dist[j] = len;
                    path[j] = location;
                }
            }
        }

        const line = getPath(dist, path, 3);

        return line;
    }
}





