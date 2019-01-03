let name = 'Ann',
    surname = 'Smith',
    email = 'AnnSmith@mail.com';

let person = {
    name,
    surname,
    email,
    sayHello(){
        console.log(`Hello, my name is ${this.name} ${this.surname}`);
    },
    get fullName(){
        return this.name+" "+this.surname;
    },
    set fullName(value){
        this.name=value;
    }
};
console.log(person);
person.sayHello();
console.log(person.fullName);
person.fullName="Liza";
console.log(person);


let property = "phone";
person = {
    //phone : 896504049
  [property] : 896504049
};
console.log(person);


function createCar(property, value) {
    return {
        [property]: value,
        ["_"+property]: value,
        [property.toUpperCase()]: value,
        ["get"+property](){
            return this[property];
        }
    }
}
console.log(createCar('vin', 1));

