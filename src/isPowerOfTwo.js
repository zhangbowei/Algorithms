function isPowerOfTwo(num) {
    //负数也复合
    return (num !== 0) && ((num-1 & num) === 0);
}

// function isPowerOfTwo(num) {
//     var arr = Math.abs(num).toString(2).split('');
//     return arr.includes('1') && arr.reverse().indexOf('1') === arr.indexOf('1');
// }

isPowerOfTwo(4); // true
isPowerOfTwo(64); // true
isPowerOfTwo(1); // true
isPowerOfTwo(0); // false
isPowerOfTwo(-1); // false