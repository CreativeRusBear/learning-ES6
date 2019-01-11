"use strict";

var person = {
    name: "Andrew",
    surname: "Williamson"
};
//имена переменных и имена свойств объекта должны совпадать
var name = person.name,
    surname = person.surname;

console.log(name, surname);

var Employee = {
    name: "Tom",
    age: 24,
    job: "Back-end developer"
};

//если имена переменных и имена свойств не свопадают, создаем след. конструкцию,
//где first, second, third - имена переменных,
//name,age,job - свойства объекта
var first = Employee.name,
    second = Employee.age,
    third = Employee.job;

console.log(first + "\n" + second + "\n" + third);

//также, мы можем вместо объекта использовать его литералы,
//а также использовать значения по умолч.
var _model$year = { model: "Chevrolet", year: 2013 },
    carModel = _model$year.model,
    productionYear = _model$year.year,
    _model$year$classCar = _model$year.classCar,
    classCar = _model$year$classCar === undefined ? 'CLS' : _model$year$classCar;

console.log("Model: " + carModel + " \nProduction year: " + productionYear + "\nClass of car: " + classCar);

//получение вложенных свойств (когда внутри объекта, находится ещё один объект со своими свойствами)
var user = {
    name: "Rose",
    age: 22,
    social: {
        facebook: 'rose22',
        gmail: 'rose22@gmail.com'
    }
};
//получаем значение вложенного совства facebook
//если мы не хотим использовать имя вложенного свойства, как имя переменной, то можно написать также как с присваиванием свойства gmail
//т.е. mail-имя перменной, вместо gmail
var userName = user.name,
    yearsOld = user.age,
    _user$social = user.social,
    facebook = _user$social.facebook,
    mail = _user$social.gmail;

console.log("Name: " + userName + " \ny.o.: " + yearsOld + " \nFacebook: " + facebook + "\nGmail: " + mail);

//передача параметров функции с помощью деструктивного присваивания
function post(user, _ref) {
    var _ref$data = _ref.data,
        name = _ref$data.name,
        age = _ref$data.age,
        cache = _ref.cache;

    console.log(name, age, cache);
};

var result = post('api/user', { data: user, cache: true });

//получение возвращаемого объекта с помощью функции через деструктивное присваивание
function getUserInfo() {
    return {
        data: "about Person",
        social: {
            vk: 'rose22@yandex.ru'
        }
    };
};

var _getUserInfo = getUserInfo(),
    data = _getUserInfo.data,
    vk = _getUserInfo.social.vk;

console.log(data, vk);