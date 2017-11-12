Function.prototype.bind = function (self) {
    // 这里写代码
    var that = this;
    var len = that.length;
    var args = [].slice.apply(arguments);
    var self = args[0];
    var items = args.slice(1);

    var res = function () {
        if (this !== global) {
            self = this;
        }
        items = items.concat([].slice.call(arguments));
        if (items.length >= len) {
            return that.apply(self, items);
        } else {
            return arguments.callee;
        }
    };

    return res;
}

// function foo() {
//     return this.bar;
// }

// foo = foo.bind({bar: 'bar1'});
// foo = foo.bind({bar: 'bar2'});

// console.log(foo());
function foo(a, b, c) {
    return a + " " + b + " " + c + " " + this.bar;
}

foo = foo.bind({
    bar: "bar6"
}, 3, 4)

console.log(foo(5));