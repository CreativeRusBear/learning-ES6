const person = {
    name: "Andrew",
    surname: "Williamson"
};
//имена переменных и имена свойств объекта должны совпадать
let {name, surname} = person;
console.log(name, surname);



const Employee = {
  name: "Tom",
  age: 24,
  job: "Back-end developer"
};

//если имена переменных и имена свойств не свопадают, создаем след. конструкцию,
//где first, second, third - имена переменных,
//name,age,job - свойства объекта
let {name: first, age: second, job: third} = Employee;
console.log(`${first}
${second}
${third}`);



//также, мы можем вместо объекта использовать его литералы,
//а также использовать значения по умолч.
let {model: carModel, year: productionYear, classCar='CLS'} = {model: "Chevrolet", year: 2013};
console.log(`Model: ${carModel} 
Production year: ${productionYear}
Class of car: ${classCar}`);


//получение вложенных свойств (когда внутри объекта, находится ещё один объект со своими свойствами)
const user={
    name: "Rose",
    age:22,
    social:{
        facebook: 'rose22',
        gmail: 'rose22@gmail.com'
    }
};
//получаем значение вложенного совства facebook
//если мы не хотим использовать имя вложенного свойства, как имя переменной, то можно написать также как с присваиванием свойства gmail
//т.е. mail-имя перменной, вместо gmail
let {name: userName, age: yearsOld, social: {facebook, gmail: mail}}=user;
console.log(`Name: ${userName} 
y.o.: ${yearsOld} 
Facebook: ${facebook}
Gmail: ${mail}`);

//передача параметров функции с помощью деструктивного присваивания
function post(user, {data: {name, age}, cache}) {
 console.log(name,age,cache);
};

let result = post('api/user', {data: user, cache: true});

//получение возвращаемого объекта с помощью функции через деструктивное присваивание
function getUserInfo() {
    return {
        data: "about Person",
        social:{
            vk: 'rose22@yandex.ru'
        }
    }
};

let {data, social: {vk}}=getUserInfo();
console.log(data, vk);