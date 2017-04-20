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
    const args = [];
    const choiceFn = function () {
        Array.prototype.slice.call(arguments);
        args.concat(arguments);
        if (args.length > fn.length) {
            return fn.apply(null, args);
        } else {
            return choiceFn;
        }
    }
    return choiceFn;
}
