class Person {
    private _age: number;
    constructor(age:number) {
        this._age = age;
    }

    growOld = () => {
        this._age ++;
    }

    age() {
        return this._age;
    }
}

const objPerson1 = new Person(0);

// objPerson1.growOld();

const growOld = objPerson1.growOld;

growOld();
console.log('age', objPerson1.age());
