var maths = Number( prompt(`Please enter maths marks`));
console.log(`Maths = `, maths);

var physics = Number(prompt(`Please enter physics marks`)) ;
console.log(`Physics = `, physics);

var chemistry = Number(prompt(`Please enter chemistry marks`));
console.log(`Chemistry = `, chemistry);

var average = (maths + physics + chemistry) / 3;
console.log(`The average of three subject is: `,average);

if(average < 70){
    console.log(`Your grade is C`); 
}else if(average > 70 && average < 90) {
    console.log(`Your grade is B`); 
}else if(average > 90) {
    console.log(`Your grade is A`);
}