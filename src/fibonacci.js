function Fibonacci(number) {
    var num = number;
    var cacheArr = [0, 1, 1];
    var getMethod = function(n) {
        if (cacheArr[n] !== void 0) {
            return cacheArr[n];
        } else {
            var res = getMethod(n-1) + getMethod(n-2);
            cacheArr[n] = res;
            return res;
        }
    }

    return getMethod(num);
}

console.log(Fibonacci(39));

