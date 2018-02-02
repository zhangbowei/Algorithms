function f2() {
	var f = function () { return 1; };
    function f() { return '2'; }
    if (true) {
        function test() {
            console.log('tset')
        }
    }
    test()
    return f();
} // 1

var a = f2();
console.log(a);