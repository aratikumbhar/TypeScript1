console.log("1) Union type");
function typ(value) {
    if (typeof value === "string") {
        console.log("Given value is ".concat(value, ", it's type string"));
    }
    else {
        console.log("Given value is ".concat(value, ", it's type number"));
    }
}
typ("Codemind");
typ(123);
console.log("2) Class Parameter Property");
var Student = /** @class */ (function () {
    function Student(name, contact) {
        this.name = name;
        this.contact = contact;
    }
    return Student;
}());
var arati = new Student("Arati", 7219425154);
console.log(arati.name, arati.contact);
console.log("3) Optional Parameter");
function record(name, contact, city) {
    console.log("Name:", name);
    console.log("Contact:", contact);
    if (typeof city === "string") {
        console.log("City:", city);
    }
}
record("Arati", 7219425154);
record("Arati", 7219425154, "Sangola");
console.log("4) Intersection Type");
function records(value) {
    console.log("Dear ".concat(value.myname, " .\nI hope you have received our email at ").concat(value.email, ".\nWe will call you at ").concat(value.contact, " shortly "));
}
var detailRecord = { myname: "Arati", email: "arati24@gmail.com", contact: 7219425154 };
var b = records(detailRecord);
