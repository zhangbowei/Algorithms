export default function curryFn(fn) {
    const len = fn.length;
    const args = [];

    const res = function (item) {
        args.push(item);
        if (args.length === len) {
            return fn.apply(null, args);
        } else {
            return res;
        }
    }

    return res;
}

function curryFn(fn) {
    let args = [];
    const choiceFn = function() {
        let data = Array.prototype.slice.call(arguments);
        args = args.concat([data]);
        if (args.length > fn.length) {
            return fn.apply(null, args);
        } else {
            return choiceFn;
        }
    }
}

function curryFn(fn) {
    var args = [];
    const choiceFn = function() {
        let data = Array.prototype.slice.call(arguments);
        args = args.concat([data]);
        if(args.length > fn.length) {
            return fn.apply(null, args);
        } else {
            return choiceFn;
        }
    }
}

function curryFn(fn) {
    let args = [];
    const choiceFn = function () {
        Array.prototype.slice.call(arguments);
        args = args.concat(arguments);
        if (args.length > fn.length) {
            return fn.apply(null, args);
        } else {
            return choiceFn;
        }
    }
    return choiceFn;
}

function inherit(parent, child) {
    var F = function() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}