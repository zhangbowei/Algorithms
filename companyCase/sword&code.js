/**题目：
 * 二维数组
 *
 * 考点：
 * 二分查找 归并排序
 */
function Find(target, array) {
    function getMidNum(start, end) {
        return ~~((start + end) / 2);
    }
    //二分查找(mid-1/mid+1； start > end结束)
    function binarySearch(array, start, end) {
        var mid = getMidNum(start, end);

        if (start > end) {
            return -1;
        }

        if (target > array[mid]) {
            return binarySearch(array, mid + 1, end);
        }
        if (target < array[mid]) {
            return binarySearch(array, start, mid - 1);
        }
        if (target === array[mid]) {
            return mid;
        }
    }

    //归并排序
    //1.两个数组归并，保证两个数组长度相等
    //2.splice与pointA不能同时用。
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

    var dataArr = sort(array);
    if (binarySearch(dataArr, 0, dataArr.length - 1) === -1) {
        return false;
    } else {
        return true;
    }
}

console.log(Find(7, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]));

/**
 * 题目：链表
 */
 function ListNode(value, next) {
    if (this instanceof ListNode) {
        return new ListNode(prev, next);
    } else {
        this.value = value;
        this.next = next || null;
    }
}

function printListFromTailToHead(head){
    while(head !== null) {
        console.log(head.val);
        head = head.next;
    }
}

/**
 * 题目：还原二叉树，前缀，后缀
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin) {
    function getDataArr(data) {
        return data;
    }
    // write code here
    var preArr = getDataArr(pre);
    var vinArr = getDataArr(vin);

    var binaryTree = function (dataArr) {
        var value = preArr.shift();
        var head = new TreeNode(value);
        var order = dataArr.indexOf(value);

        if (order > 0) {
            head.left = binaryTree(dataArr.slice(0, order));
        }
        if (dataArr.length - order - 1 > 0) {
            head.right = binaryTree(dataArr.slice(order + 1));
        }

        return head;
    }

    var test = binaryTree(vinArr);
    return test;

}

console.log(reConstructBinaryTree([1,2,4,3,5,6],[4,2,1,5,3,6]));

/*
* 题目：正则匹配
*
*/
function match(s, pattern){
    // write code here
    var pattern = '^'+pattern+'$';
    var rex = new RegExp(pattern);

    return rex.test(s);
}


//题目：链表环的入口节点
function EntryNodeOfLoop(pHead){
    // write code here
    var start = pHead;

    while(start.next !== null) {
        start.visited = true;
        start = start.next;
        if (start.visited === true) {
            return start;
        }
    }
}

//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//方案： 正难则反，所有的不好求，只求一半的。
//题目：机器人运动范围 (回溯法)
//注意：目标点，仅(x-1, y), (x, y-1)足够，若4个点就循环依赖了
//注意：该方法虽过了所有测试用例，但逻辑不对，思路是不完整的。(是错的)
//思维：不应该去确定每个点能不能走(引起相互回溯，栈溢出)，而是确定哪些点能走(直扑未知数，老人险滩划船)
var inputArr = [
    `5,10,10`,
    `10,1,100`
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
            return good.split(',').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return +item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(searchLocation(data[0]));
    // print('your function');
    function searchLocation(dataArr) {
        function isNone(x, y) {
            var str = x.toString() + y.toString();
            var res = str.split('').reduce(function (prev, item) {
                return prev + +item;
            }, 0);

            return res > threshold ? true : false;
        }
        function formatLocation(x, y) {
            return [x, y].join('-');
        }

        var rows = dataArr[1], cols = dataArr[2], threshold = dataArr[0];
        //题没说为负值，真是处处有坑
        if (threshold < 0) {
            return 0;
        }
        var map = [formatLocation(0, 0)];
        const getLocation = function (endX, endY) {
            if (endY === 20) {
                console.log('test');
            }
            if (isNone(endX, endY, threshold)) {
                return false;
            } else {
                var location = [[endX - 1, endY], [endX, endY - 1]];
                var res = location.reduce(function (prev, item) {
                    if (map.indexOf(formatLocation(item[0], item[1])) !== -1) {
                        prev = prev || true;
                    }
                    if (item[0] < 0 || item[0] > rows || item[1] < 0 || item[1] > cols) {
                        prev = prev || false;
                    } else {
                        prev = prev || getLocation(item[0], item[1]);
                    }
                    return prev;
                }, false);

                return res;
            }
        }

        for(var i = 0; i < rows; ++i) {
            for(var j = 0; j < cols; ++j) {
                if (i === 0 && j === 0) {
                    continue;
                }
                if (getLocation(i, j)) {
                    map.push(formatLocation(i, j));
                }
            }
        }

        return map.length;
    }
}

//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//题目：矩阵中路径 (回溯法)
var inputArr = [
    `ABCESFCSADEE,3,4,ABCCED`
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
            return good.split(',').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return item;
            });
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(findPath(data[0]));
    function findPath(dataArr) {
        function getAroundPoint(i, j) {
            var pointArr = [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]];
            return pointArr;
        }
        function isLawfulPoint(i, j, rows, cols) {
            if (i < 0 || i >= cols) {
                return false;
            }
            if (j < 0 || j >= rows) {
                return false;
            }

            return true;
        }

        var cube = dataArr[0].split(''), path = dataArr[3].split('');
        var cols = +dataArr[2], rows = +dataArr[1];
        var hasPath = function (i, j, lastPath, map) {
            if (!isLawfulPoint(i, j, rows, cols)) {
                return false;
            }

            var location = j * cols + i;
            if (map.indexOf(location) !== -1) {
                return false;
            }
            map.push(location);

            if (cube[location] === lastPath[0]) {
                if (lastPath.length === 1) {
                    return true;
                } else {
                    var nextArr = getAroundPoint(i, j);
                    return nextArr.reduce(function (stock, good) {
                        //每种方式要用新的map，lastPath。lastPath要减少
                        stock = hasPath(good[0], good[1], lastPath.slice(1), map.slice());
                        if (stock) {
                            nextArr.length = 0;
                        }
                        return stock;
                    }, false);
                }
            } else {
                return false;
            }
        }

        for (var i = 0; i < cols; ++i) {
            for (var j = 0; j < rows; ++j) {
                var start = cube[j * cols + i];
                if (hasPath(i, j, path, [])) {
                    return true;
                }
            }
        }

        return false;

    }
}

//题目：二维数组中的查找
//问题：为什么逐行二分查找O(MlogN)，没有移动坐标时间复杂度低(O(n+m))

//因为上下也有序，一次二分查找，其实也包含了其他信息量，但是难以利用。

//所以如何找到最好的算法 => 看计算过程有没有得到的信息没大量抛弃。
function Find(target, array) {
    var rows = array.length, cols = array[0].length;
    var i = rows - 1, j = 0, key = target;

    while(true) {
        if (i < 0 || j >= cols) {
            return false;
        }
        if (array[i][j] > key) {
            -- i;
            continue;
        }
        if (array[i][j] < key) {
            ++ j;
            continue;
        }
        if (array[i][j] === key) {
            return true;
        }
    }
}
//题目：反转链表 链表输出
function ListNode(x) {
    this.val = x;
    this.next = null;
}

var dataArr = [1, 2, 4, 5, 6];
var head = new ListNode(null);

dataArr.reduce(function (prev, item) {
    prev.next = new ListNode(item);
    return prev.next;
}, head);

function ReverseList(pHead) {
    // write code here
    var start, end = pHead;
    var setList = function (pHead) {
        if (pHead.next === null) {
            start = pHead;
            return pHead;
        }
        var next = setList(pHead.next);
        next.next = pHead;
        return pHead;
    }

    if (pHead === null) return null;
    setList(pHead).next = null;

    return start;
}
function iteratorList(pHead) {
    var res = [];
    while (pHead !== null) {
        res.push(pHead.val);
        pHead = pHead.next;
    }
    return res;
}

var reHead = ReverseList(head);
var res = iteratorList(reHead);
console.log(res);
//题目：合并两个链表
function Merge(pHead1, pHead2){
    // write code here
    if (pHead1 === null || pHead2 === null) {
        if (pHead1 === null) {
            return pHead2;
        } else {
            return pHead1;
        }
    }

    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    } else {
        pHead2.next = Merge(pHead1, pHead2.next);
        return pHead2;
    }
}
//题目：顺时针打印矩阵
function printMatrix(matrix) {
    // write code here
    function getInset(matrix) {
        var res = [];
        for (var i = 1; i < matrix.length - 1; ++i) {
            var rowArr = [];
            for (var j = 1; j < matrix[0].length - 1; ++j) {
                rowArr.push(matrix[i][j]);
            }
            if (rowArr.length !== 0) {
                res.push(rowArr);
            }
        }
        return res;
    }

    function getOutData(matrix) {
        var res = [], len = matrix[0].length;
        for (var i = 0; i < len; ++i) {
            res.push(matrix[0][i]);
        }
        for (var i = 1; i < matrix.length - 1; ++i) {
            res.push(matrix[i][len - 1]);
        }
        if (matrix.length - 1 !== 0) {
            for (var i = len - 1; i >= 0; --i) {
                res.push(matrix[matrix.length - 1][i]);
            }
        }
        if (len - 1 !== 0) {
            for (var i = matrix.length - 2; i > 0; --i) {
                res.push(matrix[i][0]);
            }
        }

        return res;
    }

    function clockwise(matrix) {
        var res = [];
        if (matrix.length === 0) return res;
        if (matrix.length === 1 && matrix[0].length === 1) return matrix[0];
        res = res.concat(getOutData(matrix));
        var insetMatrix = getInset(matrix);
        res = res.concat(clockwise(insetMatrix));

        return res;
    }

    var res = clockwise(matrix);
    return res;
}

printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
printMatrix([[1, 2, 3, 4, 5]]);
printMatrix([[1], [2], [3], [4], [5]]);
printMatrix([[1]]);
printMatrix([[1, 2, 3], [5, 6, 7], [9, 10, 11], [13, 14, 15]]);
//题目：树的子结构  树包含子树
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSubtree(headA, headB) {
    if (headB === null) {
        return true;
    }
    if (headA === null) {
        return false;
    }
    if (headA.val === headB.val) {
        return isSubtree(headA.left, headB.left) && isSubtree(headA.right, headB.right);
    } else {
        return false;
    }

}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (pRoot1 === null || pRoot2 === null) return null;

    return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);

}
module.exports = {
    HasSubtree : HasSubtree
};

//题目：和为S连续正整数列
function FindContinuousSequence(sum){
    function getOutput(dataArr) {
        var res = dataArr.reduce(function(prev, item) {
            var seq = [];
            for(var i = item[0]; i < item[0] + item[1]; ++i) {
                seq.push(i);
            }
            return prev.concat([seq]);
        }, []);

        return res;
    }
    // write code here
    var start = ~~(sum / 2);
    var res = [];
    for(var i = 1; i <= start; ++i) {
        var val = 0;
        for(var j = 2; ; ++j) {
            if (i === 18 && j === 5) {
                console.log('test');
            }
            val = (2*i + (j - 1))*j/2;
            if (val > sum) {
                break;
            }
            if (val === sum) {
                res.push([i, j]);
            }
        }
    }

    return getOutput(res);
}

//题目：和为S的两个数字
function FindNumbersWithSum(array, sum){
    // write code here
    function getIndex(arr, num) {
        var cpArr = arr.slice();
        var res = cpArr.reduce(function(prev, item, index) {
            if (item > num) {
                prev = index;
                cpArr.length = 0;
            }
            return prev;
        }, -1);

        return res;
    }

    var arr = array.slice();
    var mid = getIndex(arr, ~~(sum/2));


    if (mid === -1) return [];
    var res = [];
    for(var i = 0; i < mid; ++i) {
        if(arr.indexOf(sum - arr[i]) !== -1) {
            res = [arr[i], sum - arr[i]];
            break;
        }
    }

    return res;

}


//题目：多写测试样例，招规律
function IsContinuous(numbers) {
    // write code here
    function getMark(dataArr) {
        var res = {};

        res.start = Math.min.apply(null, dataArr);
        res.end = Math.max.apply(null, dataArr);

        return res;
    }
    function getZeroNum(dataArr) {
        return dataArr.reduce(function (prev, item) {
            return item === 0 ? prev + 1 : prev;
        }, 0);
    }
    function getNoZero(dataArr) {
        return dataArr.map(function (item) {
            return +item;
        }).filter(function (item) {
            return item === 0 ? false : true;
        });
    }
    function isLawful(dataArr) {
        var len = dataArr.length;

        for(var i = 0; i < len; ++i) {
            if (dataArr.lastIndexOf(dataArr[i]) !== i) {
                return false;
            }
        }

        return true;
    }

    var zeroNum = getZeroNum(numbers);
    var dataArr = getNoZero(numbers);
    if (!isLawful(dataArr)) {
        return false;
    }

    var mark = getMark(dataArr);
    var flag = true;
    for (var i = mark.start; i <= mark.end; ++i) {
        if (dataArr.indexOf(i) === -1) {
            if (zeroNum !== 0) {
                --zeroNum;
            } else {
                flag = false;
                break;
            }
        }
    }

    return flag;
}
IsContinuous([1,3,2,5,4])

//题目：求两个整数之和
function Add(num1, num2){
    // write code here
    var a, b;
    a = num1^num2;
    b = (num2&num1) << 1;
    while(b) {
        num1 = a;
        num2 = b;
        a = num1^num2;
        b = (num1&num2) << 1;
    }

    return a;
}

//题目：构建成绩数组
function multiply(array){
    // write code here
    var B = [], A = array.slice();

    B[0] = 1;

    for(var i = 1; i < A.length; ++i) {
        B[i] = B[i-1]*A[i-1];
    }
    var temp = 1;
    for(var i = A.length - 2; i >= 0; --i) {
        temp *= A[i+1];
        B[i] = B[i] * temp;
    }

    return B;

}

//题目：表示数值的字符串
function isNumeric(s){
    // write code here
    var re = /^[+-]?\d*(\.\d+)?([eE][-+]?\d+)?$/;
    var res = re.test(s);

    return res;
}

//题目：删除链表中的重复节点
function deleteDuplication(pHead){
    // write code here
    if(pHead === null || pHead.next === null) {
        return pHead;
    }

    var first = pHead.next, last = pHead;
    var res;

    if(first.val === last.val) {
        while(first !== null && first.val === last.val ) {
            first = first.next;
        }
        return deleteDuplication(first);
    } else {
       pHead.next = deleteDuplication(first);
    }

    return pHead;
}

//题目: 镜像 对称二叉树
function isSymmetrical(pRoot)
{
    function compare(left, right) {
        if (left === right) {
            return true;
        }
        if (left !== null && right !== null) {
            if (left.val === right.val) {
                return compare(left.left, right.right) && compare(left.right, right.left);
            }
        }

        return false;
    }

    return compare(pRoot.left, pRoot.right);
}

//题目：按之字形顺序打印二叉树
function Print(pRoot) {
    function getIncr(dataArr, flag) {
        var rawArr = dataArr.slice();
        var res = [];
        while (rawArr.length) {
            var pHead = rawArr.shift();
            if (pHead.left !== null) {
                res.push(pHead.left);
            }
            if (pHead.right !== null) {
                res.push(pHead.right);
            }
        }
        var data = res.slice();
        if (res.length !== 0) {
            if (flag) {
                data.reverse();
            }
            res = [data].concat(getIncr(res, flag));
        }
        return res;
    }

    function getOutput(dataArr) {
        return dataArr.map(function (good) {
            return good.map(function (item) {
                return item.val;
            });
        });
    }
    if(pRoot === null) return [];
    var nodeArr = [[pRoot]].concat(getIncr([pRoot], false));
    var res = getOutput(nodeArr);

    return res;
}