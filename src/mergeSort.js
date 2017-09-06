function mergeSort(dataArr) {
    function partition(start, end) {
        if (start > end) return [];
        if (start === end) {
            return [dataArr[start]];
        }
        var mid = ~~((start + end) / 2);
        var head = partition(start, mid);
        var tail = partition(mid+1, end);
        return sort(head, tail);
    }

    function sort(head, tail) {
        var res = [], pointA = 0, pointB = 0;
        while(head.length !== pointA && tail.length !== pointB) {
            while(head[pointA] <= tail[pointB]) {
                res.push(head[pointA]);
                ++ pointA;
            }
            while(head[pointA] >= tail[pointB]) {
                res.push(tail[pointB]);
                ++ pointB;
            }
        }

        if (head.length === pointA) {
            res = res.concat(tail.slice(pointB));
        }
        if (tail.length === pointB) {
            res = res.concat(head.slice(pointB));
        }

        return res;
    }

    return partition(0, dataArr.length - 1);
}

console.log(mergeSort([1, 2, 3, 4, 11, 6]));
console.log(mergeSort([1]));
console.log(mergeSort([]));

//B.数组已分割好
function sort(dataArr) {
    function mergeSort(arrA, arrB) {
        var pointA = 0, pointB = 0, res = [];
        var lenA = arrA.length, lenB = arrB.length;

        while (pointA !== lenA && pointB !== lenB) {
            while (arrA[pointA] <= arrB[pointB]) {
                res.push(arrA[pointA]);
                ++pointA;
            }
            while (arrB[pointB] < arrA[pointA]) {
                res.push(arrB[pointB]);
                ++pointB;
            }
        }
        if (pointB !== lenB) {
            res = res.concat(arrB.slice(pointB));
        }
        if (pointA !== lenA) {
            res = res.concat(arrA.slice(pointA));
        }

        return res;
    }

    function combineArr(array) {
        if (array.length === 1) {
            return array[0];
        }
        return combineArr(array.reduce(function (prev, item, index) {
            if (index % 2 === 0) {
                Array.isArray(array[index + 1]) ? null : array[index + 1] = [];
                prev.push(mergeSort(item, array[index + 1]));
            }
            return prev;
        }, []));
    }

    return combineArr(dataArr);
}

sort([[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]);