'use strict';

var sum = function sum(a, b) {
    return a + b;
};
//если передается один парметр, то скобки можно не ставить
var square = function square(x) {
    return x * x;
};

var giveMeDate = function giveMeDate() {
    return new Date().toLocaleString();
};

var meeting = function meeting() {
    return console.log('Hello, my friend');
};

//если в теле функции имеется несколько строк, то необходимо использовать фигурные скобки, а также необходимо использовать ключ. слово return (если нам необходимо вернуть полученное значение)
var multiplication = function multiplication(x, y) {
    var result = x * y;
    return result;
};
//для того, чтобы вернуть литерал объекта, его неободимо обернуть в круглые скобки
var returnObj = function returnObj() {
    return { name: 'Rose' };
};

console.log(square(5));
console.log(sum(2, 7));
console.log(giveMeDate());
meeting();
console.log(multiplication(5, 35));
console.log(returnObj());

//функция, которая вызвает сама себя
(function () {
    console.log('IIFE');
})();

//стрелочная функция, которая вызвает сама себя
(function () {
    return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumElArr = 0;
// numbers.forEach(function (value) {
//     sumElArr+=value;
// });

numbers.forEach(function (value) {
    return sumElArr += value;
});
console.log(sumElArr);

var squared = numbers.map(function (value) {
    return value * value;
});
console.log(squared);

var person = {
    name: 'Angela',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hi, my name is ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};

person.greet();