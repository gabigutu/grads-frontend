var Child = /** @class */ (function () {
    function Child(name) {
        this.name = name;
    }
    Child.prototype.printChildName = function () {
        console.log('Child name', this.name);
    };
    return Child;
}());
var c = new Child('Copil1');
var c2 = new Child('Copil2');
console.log(c.printChildName());
console.log(c2.printChildName());
