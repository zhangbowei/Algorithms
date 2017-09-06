function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var arr = [8, 6, 6, 5, 7, 7];

function productTree(dataArr) {
    function getSplitArr(dataArr) {
        var rawArr = dataArr.slice();
        var left = [], right = [], len;

        for(var i = 1; rawArr.length !== 0; ++i) {
            left = left.concat(rawArr.splice(0, Math.pow(2, i)/2));
            right = right.concat(rawArr.splice(0, Math.pow(2, i)/2));
        }

        var res =  {left, right};
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

