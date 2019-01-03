'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = 'Ann',
    surname = 'Smith',
    email = 'AnnSmith@mail.com';

var person = {
    name: name,
    surname: surname,
    email: email,
    sayHello: function sayHello() {
        console.log('Hello, my name is ' + this.name + ' ' + this.surname);
    },

    get fullName() {
        return this.name + " " + this.surname;
    },
    set fullName(value) {
        this.name = value;
    }
};
console.log(person);
person.sayHello();
console.log(person.fullName);
person.fullName = "Liza";
console.log(person);

var property = "phone";
person = _defineProperty({}, property, 896504049);
console.log(person);

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, "_" + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, "get" + property, function () {
        return this[property];
    }), _ref;
}
console.log(createCar('vin', 1));