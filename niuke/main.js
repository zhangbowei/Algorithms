function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var arr = [8, 1, 2, 3, 4, 5, 6, 7];

function productTree(dataArr) {
    function getSplitArr(dataArr) {
        var rawArr = dataArr.slice();
        var left = [], right = [], len;

        for (var i = 1; rawArr.length !== 0; ++i) {
            left = left.concat(rawArr.splice(0, Math.pow(2, i) / 2));
            right = right.concat(rawArr.splice(0, Math.pow(2, i) / 2));
        }

        var res = { left, right };
        return res;
    }
    function iterator(dataArr) {
        if (dataArr.length === 0) return null;
        var pHead = new TreeNode(dataArr[0]);
        var nextData = getSplitArr(dataArr.slice(1));

        pHead.left = iterator(nextData.left);
        pHead.right = iterator(nextData.right);

        return pHead;
    }

    var rawArr = dataArr.slice();
    var res = iterator(rawArr);

    return res;
}

var pHead = (productTree(arr));

console.log(Print(pHead));
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
