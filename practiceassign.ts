console.log(`1) Union type`);

type test =  string | number;
function typ(value:test) {
    if(typeof value === "string"){
        console.log(`Given value is ${value}, it's type string`);   
    }else{
        console.log(`Given value is ${value}, it's type number`);    
    }
}
typ("Codemind");
typ(123);

console.log(`2) Class Parameter Property`);
class Student{
    constructor(public name:string, public contact:number){

    }
}
const arati = new Student("Arati",7219425154);
console.log(arati.name,arati.contact);

console.log(`3) Optional Parameter`);
function record(name:string,contact:number,city?:string){
    console.log(`Name:`, name);
    console.log(`Contact:`, contact); 
    if(typeof city === "string"){
        console.log(`City:`,city);    
    }
}
record("Arati",7219425154);
record("Arati",7219425154, "Sangola");

console.log(`4) Intersection Type`);
type Name = {
    myname : string;
}
type Mail = {
    email:string;
} 
type Contact = {
    contact:number;
}

type detailRecord = 
& Name
& Mail
& Contact;

function records(value:detailRecord) {  
    console.log(`Dear ${value.myname} .
I hope you have received our email at ${value.email}.
We will call you at ${value.contact} shortly `) ;
  }
let detailRecord = {myname:"Arati",email:"arati24@gmail.com",contact:7219425154} ;  
let b= records(detailRecord);