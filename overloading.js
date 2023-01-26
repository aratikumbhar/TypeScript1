//  function / method overloading - same name with different parameters / arguments
function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe(2); // o/p is 4
doubleMe('arati'); // o/p is arati arati
doubleMe(["a"]); // o/p is a a
