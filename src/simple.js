function f2() {
	var f = function () { return 1; };
    function f() { return '2'; }
    return f();
} // 1

var a = f2();