console.log("###. Union Type");
function typ(value) {
    if (typeof value === "string") {
        console.log("Given value is of type string");
    }
    else {
        console.log("Given value is of type number");
    }
}
typ("Monika");
typ(123);
console.log("###. Class Parameter Property");
var Student = /** @class */ (function () {
    function Student(name, contact) {
        this.name = name;
        this.contact = contact;
    }
    return Student;
}());
var monika = new Student("Monika", 7620784232);
console.log(monika.name, monika.contact);
console.log("###. Optional Parameter");
function record(name, contact, city) {
    console.log("Name", name);
    console.log("Contact", contact);
    if (typeof city === "string") {
        console.log("City", city);
    }
}
record("Monika", 7620784232);
record("Monika", 7620784232, "Pandharpur");
console.log("###.Intersection Type");
function records(value) {
    console.log("Dear ".concat(value.myname, " .\nI hope you have received our email at ").concat(value.email, ".\nWe will call you at ").concat(value.contact, " shortly ,"));
}
var detailRecord = { myname: "Monika", email: "monicat@123", contact: 762074232 };
var b = records(detailRecord);
