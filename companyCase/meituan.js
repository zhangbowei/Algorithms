function printMatrix(num) {
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
                return row*tag + order;
            });
        });
    }


    var dataArr = createTwoDimenArr(num, num);

    for(var i = 0; i <= num*2 - 2; ++i) {
        var start = 0, end = i;
        if(i > num - 1) {
            start = i - (num - 1);
            end = num - 1;
        }
        var res = [];
        for(var j = start; j <= end; ++j) {
            res.push(dataArr[j][i-j]);
        }

        console.log(res.join(" "));
    }

}

printMatrix(4);