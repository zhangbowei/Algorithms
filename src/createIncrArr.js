function createIncrArr(count) {
    return new Array(count+1).join().split('').reduce(function(prev, item, index) {
        return prev.concat([index]);
    }, []);
}

const res = createIncrArr(100);
console.log(res);