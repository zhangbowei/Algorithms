function SuperClass(name) {
    this.name = name;
    this.books = ['JS', 'html', 'css'];
}
SuperClass.prototype.getName = function() {
    console.log(this.name);
}
var inheritPrototype = function(parent, child) {
    var F = function() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}
inheritPrototype(SuperClass, f);
function f() {
    var res = [], r = [];
    for (var i in this) {
        r.push(i);
        this.hasOwnProperty(i) ? res.push(i) : null;
    }
    this.a = 1;
    return 1;
}
var a = new f();
var b = f();

