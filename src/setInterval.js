function count(start, end) {

    st = setTimeout(function(){
        console.log('@@@', start);
        count(start + 1);
    }, 100);

    return st;
}
count(1);

setTimeout(function() {
    clearTimeout(st);
}, 3000);