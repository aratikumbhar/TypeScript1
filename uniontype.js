var sn;
sn = 'codemind';
sn = 100;
console.log(sn); // at one time one variable run
function formatCommandLine(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));

var Person1 = /** @class */ (function () {
    // parameterised constructor .
    function Person1(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    return Person1;
}());
var jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);
//we can write this one like
// class Person1 {
//     // parameterised constructor .
//     constructor(public fname: string, public age: number) {
// }
// const jack = new Person1('Jack', 30);
// console.log(jack.fname, jack.age);
