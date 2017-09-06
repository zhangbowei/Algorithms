var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

function levelOrderTraver(node) {
    if (!node) {
        return null;
    }
    var que = [];
    que.push(node);
    while (que.length) {
        var point = que.shift();
        console.log(point.value);
        if(point.left) que.push(point.left);
        if(point.right) que.push(point.right);
    }
}

function preOrderUnRecur(node) {
    if (!node) {
        return null;
    }
    var que = [];
    que.push(node);
    while(que.length) {
        var point = que.pop();
        console.log(point.value);
        //保证先左后右
        if(point.right) que.push(point.right);
        if(point.left) que.push(point.left);
    }
}


