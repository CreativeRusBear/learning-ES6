"use strict";

//парметры по умолч.
function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "friend";

    console.log(greeting + " " + name);
}

greet("Hi", "Bob");
greet(undefined, "Bill");
greet("Hey");
greet();

//когда неизвестно сколько агрументов будут передаваться
function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values);
    var sum = 0;
    values.forEach(function (item) {
        sum += item;
    });
    console.log("Sum = " + sum);
}

//анлогичный способ
function sumWithReduce() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    console.log(values.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }));
}
sum(1, 2, 3, 4, 5);
sumWithReduce(1, 2, 3, 4, 5);