export default function curryFn(fn) {
    const len = fn.length;
    const args = [];

    const res = function(item) {
       args.push(item);
       if (args.length === len) {
           return fn.apply(null, args);
       } else {
           return res;
       }
    }

    return res;
}