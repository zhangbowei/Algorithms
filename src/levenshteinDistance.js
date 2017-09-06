//最小编辑距离
function doIt(input) {
    function formatData(rawData) {
        // return rawData.map(function (good) {
        //     return good.split(' ').map(function (item, index) {
        //         // 视情况而定，'32'.split(' ') = ['32']
        //         return item;
        //     });
        // });
        return rawData;
    }

    var data = formatData(input);
    console.log(lsDistance(data));


    function lsDistance(dataArr) {
        function createSoleDimenArr(count) {
            var res = [];
            for (var i = 0; i < count; ++i) {
                res.push(0);
            }
            return res;
        }
        function createTwoDimenArr(column, row) {
            return createSoleDimenArr(column).map(function (good, tag) {
                return createSoleDimenArr(row).map(function (element, order) {
                    if (tag === 0) return order;
                    if (order === 0) return tag;
                    return element;
                });
            });
        }

        var strA = dataArr[0], strB = dataArr[1];
        var lenA = strA.length, lenB = strB.length;
        var dp = createTwoDimenArr(lenA+1, lenB+1);

        for (var i = 1; i <= lenA; ++i) {
            for(var j = 1; j <= lenB; ++j) {
                if (strA[i-1] === strB[j-1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
                }
            }
        }

        return dp[lenA][lenB];
    }
}
