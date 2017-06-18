//严格说其实是mvvm，双向视图绑定。backbone view和model是在js代码中绑定的。
function Model(value) {
    if (this instanceof Model) {
        this.value = value;
        this.listener = [];
    } else {
        return new Model(value);
    }
}

Model.prototype.set = function (value) {
    this.value = value;
    setTimeout(function () {
        this.listener.forEach(function (item) {
            item(value);
        });
    });
}

Model.prototype.watch = function (callback) {
    this.listener.push(callback);
}

Model.prototype.bind = function (nodeDom) {
    const el = nodeDom;

    this.listener.watch((value) => {
        el.innerHTML = value; //整个实现尽量简单，所以这里默认设置DOM元素的innerHTML。
    });
}

function bindViewToModel(callback) {
    const model = {};
    const domArr = [].slice.call(document.querySelectorAll('[bind]'));

    domArr.forEach(function (item) {
        const name = item.getAttribute('bind');
        if (model[name] === void 0) model[name] = Model();
        model[name].bind(item);
    });

    return model;
}