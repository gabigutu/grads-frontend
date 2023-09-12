class Child {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printChildName() {
        console.log('Child name', this.name);
    }
}

let c: Child = new Child('Copil1');
let c2: Child = new Child('Copil2');
console.log(c.printChildName());
console.log(c2.printChildName());