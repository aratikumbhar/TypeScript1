function contact(details) {
    console.log("Dear ".concat(details.name, " .\n    I hope you have received our email at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
var objPerson = { name: 'Arati', email: 'aratikumbhar43@gmail.com', phone: 7219425154 };
contact(objPerson);
