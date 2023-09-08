// alert('Hello');
console.log('Hello');

var x = 4;
console.log(x, typeof x, typeof typeof x);
x = 'ana are mere';
console.log(x, typeof x, typeof typeof x);
x = 9.2;
console.log(x, typeof x, typeof typeof x);
x = true;
console.log(x, typeof x, typeof typeof x);
x = "dadada";
console.log(x, typeof x, typeof typeof x);

var y; // undefined
console.log(y, typeof y, typeof typeof y);
var z = undefined;
console.log(z, typeof z, typeof typeof z); // ?
var t = 'undefined';
console.log(t, typeof t, typeof typeof t); // ?
u = undefined;
console.log(u);

var contor = 100;
function incrementeazaContor() {
    contor++;
}
incrementeazaContor();
console.log(contor); // 101

contor = 100;
function incrementeazaContor2() {
    var contor;
    contor++;
}
incrementeazaContor2();
console.log(contor); // 100

for (var i = 1; i < 10; i++) { }
console.log(i); // ??

for (let j = 1; j < 10; j++) { }
// console.log(j); // j is not defined

function incrementeazaContor3() {
    contor3 = 100;
    contor3++;
}
incrementeazaContor3();
console.log(contor3); // 101

const PASS_DB = 'dadada';
// PASS_DB = 'ddddd'; // Assignment to constant variable.

// json = javascript object notation
var elements = [
    832,
    false,
    'dadada',
    93.33,
    {
        'nume': 'Vasile',
        "nota": 10
    },
    [
        33, 11
    ]
];
console.log(elements[3], typeof elements[3]);
console.log(elements[4], typeof elements[4]);
console.log(elements[5], typeof elements[5]);

var student = {
    nume: 'Popescu',
    prenume: 'Vasile'
}
console.log(student);

let numeStudent = 'Georgescu';
student = {
    nume: numeStudent,
    prenume: 'Vasile'
}
console.log(student); // Georgescu Vasile

console.log(student.nume); // Georgescu
console.log(student['nume']); // Georgescu
// console.log(student[nume]); // nume is not defined

let nume = 'Anghelescu';
student = {
    nume: nume,
    prenume: 'Vasile'
}
console.log(student.nume); // Anghelescu

nume = 'Diaconescu';
student = {
    nume, // nume: nume
    prenume: 'Vasile'
}
console.log(student.nume); // ???

let a1 = 7;
let a2 = '7';
console.log(a1 == a2); // true
console.log(a1 === a2); // false (a1 == a2 && typeof a1 == typeof a2)

let b1 = undefined;
let b2;
console.log(b1 == b2); // true
console.log(b1 === b2); // true

let c1 = undefined;
let c2 = 'undefined';
console.log(c1 == c2); // false "nimic" nu este egal cu "ceva"
console.log(c1 === c2); // false undefined != string

let d1 = 0;
let d2 = false;
console.log(d1 == d2); // true
console.log(d1 === d2); // false
console.log(typeof d1 == typeof d2); // false
console.log(typeof d1 === typeof d2); // false

var masina = {
    marca: 'Tesla',
    model: 'Model3'
};
console.log('marca' in masina); // true
console.log('viteza' in masina); // false
// console.log(viteza in masina); // viteza is not defined

for (cheie in masina) {
    console.log('(masina) ' + cheie + ' este egal cu ' + masina[cheie]);
    // console.log(cheie + ' este egal cu ' + masina.cheie); // ? // masina['cheie']
}
// for (valoare of masina) { // it's not iterable
//     console.log('valoare = ' + valoare);
// }

var numere = [93, 19, 80, 31];
console.log(2 in numere); // true

for (cheie in numere) {
    console.log('(numere) ' + cheie + ' este egal cu ' + numere[cheie]);
}
for (numar of numere) {
    console.log('numar = ' + numar); // ?
}

function salut() {
    console.log('Salut');
}
salut();

const salut2 = function () {
    console.log('Salut2');
}
salut2();

salut3 = (x) => x * 2; // (x) => { return x * 2; }
console.log(salut3(30)); // 60
salut4 = (x, y, z) => {
    console.log('Am intrat in salut4');
    return x + y + z + 1;
};
console.log(salut4(1, 1, 1)); // 4

hello = () => {
    return "Hello World!";
}
console.log(hello());

hello2 = () => "Hello World!";
console.log(hello2());

function printAll(a, b, ...all) {
    console.log(a);
    console.log(b);
    console.log(all);
}
printAll(1, 2, 'Hello', false);

function sum(x, y, z) { return x + y + z; }
const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum(numbers)); // numbers + undefined + undefined => 1,2,3undefinedundefined ?? TODO: Why?

arr1 = [1, 2, 3]
arr2 = [...arr1]
console.log(arr1, arr2);

arr1 = [1, 2, 3]
arr2 = [arr1]
console.log(arr2); // [[1, 2, 3]]

[t1, t2] = [10, 20];
console.log(t1, t2); // 10, 20

let t3;
t3, t4 = [10, 20];
console.log(t3, t4); // undefined, [10, 20]

let ceva = (5 == 5, true == false, 8 == 8);
console.log(ceva); // true

let t5
t5, t6 = 10, 20
console.log(t5, t6) // undefined, 10
30

var obj = {a: 1, b: true}
var {b, a} = obj;
console.log(a, b); // a, b? 1, true?

({nume, prenume} = {nume: 'Popescu', prenume: 'Vasile'})
console.log(nume, prenume);


