function fill(n, m) {
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

    function getOutData(matrix, row, col) {
        var startC = col, startR = row;
        var endR = matrix.length - row, endC = matrix[0].length - col;

        for (var i = startC; i < endC; ++i) {
            matrix[startC][i] = ++count;
        }
        for (var i = startR + 1; i < endR - 1; ++i) {
            matrix[i][endR - 1] = ++count;
        }
        if (endR - 1 !== 0) {
            for (var i = endC - 1; i >= startC; --i) {
                matrix[endR - 1][i] = ++count;
            }
        }
        if (endC - 1 !== 0) {
            for (var i = endR - 2; i > startR; --i) {
                matrix[i][startC] = ++count;
            }
        }

        return res;
    }

    function clockwise(matrix, row, col) {
        if (matrix.length === row) return;
        if (matrix[0].length === col) return;

        getOutData(matrix, row, col);
        clockwise(matrix, row+1, col+1);

        return res;
    }

    function getOutput(matrix) {
        return matrix.reduce(function(prev, rowArr) {
            return prev.concat([rowArr.join(' ')]);
        }, []).join('\n');
    }

    var count = 0;
    var matrix = createTwoDimenArr(n, m);

    clockwise(matrix, 0, 0);

    var res = getOutput(matrix);

    return res;
}
