/* 排序思路：（降序）
 * 将堆根保存于尾部，并对剩余序列调用调整函数，调整完成后，再将最大跟保存于尾部-1（-1，-2，...，-i），
 * 再对剩余序列进行调整，反复进行该过程，直至排序完成。
 */

/* 将最大的元素调整到堆顶*/
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
            for (var i = arr.length - 1; i > 0; i--) {   //从数组的尾部进行调整
                var swap = arr[i];  //堆顶永远是最大的元素,将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
                arr[i] = arr[0];
                arr[0] = swap;
                AdjustHeap(arr, 0, i); //将最大的元素进行调整，将最大的元素调整到堆顶
            }
        }


var arr = [1,1,11,1,11];
console.log('before: ' + arr);
HeapSort(arr);
console.log(' after: ' + arr);