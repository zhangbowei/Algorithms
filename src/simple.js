function isPalindrome( x ) {
    // write code here
    x = Math.abs(x).toString();
    let isEven = x.length % 2 === 0;
    let len = isEven ? x.length  : x.length + 1;
    let mid = len / 2;
    for(let i = 0; i < mid; ++i) {
        if (x[i] !== x[x.length - i - 1]) {
            return false;
        }
    }
    return true;

}

isPalindrome(-2147483648)