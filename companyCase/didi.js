//题目：最大子序列和
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    // `-23 17 -7 11 -2 1 -34`,
    `  `,
    ``
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
            var res = good.match(/\S+/g).map(function (item) {
                return +item;
            });

            return res;
        });
    }
    if (input[0].match(/\d/) === null) return null;
    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findMaxSeqSum(data[0]));
    function findMaxSeqSum(dataArr) {
        function getSum(dataArr) {
            return dataArr.reduce(function(prev, item) {
                return prev + item;
            }, 0);
        }
        function maxInWindows(num, size) {
            var point = +size, dataBase = num;
            var max = -Infinity;
            if (point === 0) return res;
            for (var i = 0; i <= dataBase.length - point; ++i) {
                var res = getSum(dataBase.slice(i, i + point));
                max = max > res ? max : res;
            }

            return max;
        }
        var rawArr = dataArr.slice();
        var max = -Infinity;

        for(var i = 1; i < rawArr.length; ++i) {
            var res = maxInWindows(rawArr, i);
            max = max > res ? max : res;
        }

        return max;
    }
}

//题目：堆排，找到第K大数
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    ` 1 1 11 1 11
2`,
//     `21
// 1`,
//     `45 87 99
// 1`,
`45 67 33 21
2`,
`-45 -67 -33 21
1`
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
            var res = good.match(/\S+/g).map(function (item) {
                return +item;
            });

            return res;
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findKNum(data));
    function findKNum(dataArr) {
        function AdjustHeap(arr, pos, len) {
            var swap = arr[pos];      //保存当前节点
            var child = pos * 2 + 1;  //定位到当前节点的左边的子节点
            while (child < len) {       //递归遍历所有的子节点
                if (child + 1 < len && arr[child] < arr[child + 1]) {
                    child += 1;
                }
                if (arr[pos] < arr[child]) {
                    arr[pos] = arr[child];
                    pos = child;
                    child = pos * 2 + 1;
                }
                else {
                    break;
                }
                arr[pos] = swap;
            }
        }

        function BuildHeap(arr) {
            for (var i = ~~(arr.length / 2); i >= 0; i--) {  //构建打顶堆
                AdjustHeap(arr, i, arr.length);
            }
        }

        function HeapSort(arr, K) {
            BuildHeap(arr); //构建堆
            for (var i = arr.length - 1; i > arr.length - K; i--) {   //从数组的尾部进行调整
                var swap = arr[i];  //堆顶永远是最大的元素,将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
                arr[i] = arr[0];
                arr[0] = swap;
                AdjustHeap(arr, 0, i); //将最大的元素进行调整，将最大的元素调整到堆顶
            }
        }

        var rawArr = dataArr[0].slice(), K = dataArr[1];

        HeapSort(rawArr, K);
        var res = rawArr[0];
        // var res = rawArr.sort(function(a, b) {
        //     return b - a;
        // })[K-1];
        return res;

    }
}











