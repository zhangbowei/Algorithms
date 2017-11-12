function heapSort(dataArr) {
    function adjustHeap(arr, pos, len) {
        var swap = arr[pos];
        var child = pos * 2 + 1;
        while (child < len) {
            if (child + 1 < len && arr[child + 1] > arr[child]) {
                child += 1;
            }
            if (swap < arr[child]) {
                arr[pos] = arr[child];
                pos = child;
                child = pos * 2 + 1;
            } else {
                break;
            }
            arr[pos] = swap;
        }
    }


    function buildHeap(arr) {
        var len = arr.length;
        for (var i = ~~(len / 2); i >= 0; --i) {
            adjustHeap(arr, i, len);
        }
    }

    function main(arr) {
        arr = arr.slice();
        buildHeap(arr);

        var len = arr.length;
        for (var i = len - 1; i > 0; --i) {
            var temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            adjustHeap(arr, 0, i);
        }

        return arr;
    }

    return main(dataArr);
}

console.log(heapSort([1, 44, 2332, 11, 645, 7895, 23]));
