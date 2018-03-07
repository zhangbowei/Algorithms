function C(x) {
    this.x = x;
}
var a = new C(1);


C.prototype.y = 1;
var b = new C(2);
console.log(b.x, b.y);
console.log(a.__proto__);
console.log(a.x, a.y);
