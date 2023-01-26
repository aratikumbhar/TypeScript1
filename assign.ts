console.log(`###. Union Type`);

// type test =  string | number;
// function typ(value:test) {
//     if(typeof value === "string"){
//         console.log(`Given value is of type string`);   
//     }else{
//         console.log(`Given value is of type number`);    
//     }
// }
// typ("Monika");
// typ(123);

console.log(`###. Class Parameter Property`);

// class Student{
//     constructor(public name:string, public contact:number){

//     }
// }
// const monika = new Student("Monika",7620784232);
// console.log(monika.name,monika.contact);

// console.log(`###. Optional Parameter`);
// function record(name:string,contact:number,city?:string){
//     console.log(`Name`, name);
//     console.log(`Contact`, contact); 
//     if(typeof city === "string"){
//         console.log(`City`,city);    
//     }
// }
// record("Monika",7620784232);
// record("Monika",7620784232,"Pandharpur");

// console.log(`###.Intersection Type`);
// type Name = {
//     myname : string;
// }
// type Mail = {
//     email:string;
// } 
// type Contact = {
//     contact:number;
// }

// type detailRecord = 
// & Name
// & Mail
// & Contact;

// function records(value:detailRecord) {  
//     console.log(`Dear ${value.myname} .
// I hope you have received our email at ${value.email}.
// We will call you at ${value.contact} shortly ,`) ;
//   }
// let detailRecord = {myname:"Monika",email:"monicat@123",contact:762074232} ;  
// let b= records(detailRecord);