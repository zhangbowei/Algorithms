var dataArr = [1, 2, 3, 4, 2, 1, 5, 6, 2, 1, 2, 3, 7, 6, 3, 2, 1, 2, 3, 6];

function FIFO(dataArr, pageNum) {
    function createSoleArr(count) {
        return new Array(count + 1).join().split('').map(function (item) {
            return 0;
        });
    }

    // var cache = createSoleArr(pageNum);
    var cache = [];
    var point = 0, lackNum = 0;

    dataArr.forEach(function (data) {
        if (cache.indexOf(data) === -1) {
            ++lackNum;
            if (cache.length === pageNum) {
                cache[point] = data;
                ++point;
            } else {
                cache.push(data);
            }
        }
        if (point === pageNum) {
            point = 0;
        }
        // console.log(cache.join(' '));
    });
    console.log(lackNum);
}

FIFO(dataArr, 3);

function LRU(dataArr, pageNum) {
    var cache = [];
    var point = 0, lackNum = 0;

    dataArr.forEach(function (data) {
        if (cache.indexOf(data) === -1) {
            ++lackNum;
            if (cache.length === pageNum) {
                cache[point] = data;
                ++point;
            } else {
                cache.push(data);
            }
        } else {
            if (cache.length === pageNum) {
                var index = cache.indexOf(data);
                var temp = cache.splice(index, 1)[0];

                if (index < point) {
                    cache.splice(point-1, 0, temp);
                } else {
                    cache.splice(point, 0, temp);
                    ++point;
                }
            }
        }
        if (point === pageNum) {
            point = 0;
        }
        // console.log(cache.join(' '));
    });
    console.log(lackNum);
}

LRU(dataArr, 3);