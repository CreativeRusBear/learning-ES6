"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello ", ""], ["Hello ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log("Hello " + name);
}

greet("Bill");

function messageEmail(to, from, subject, message) {
    console.log("\n        To: " + to + "\n        From: " + from + "\n        Subject: " + subject + "\n        Message: " + message + "\n    ");
}

function sumTwoNumbers(x, y) {
    console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)));
}

messageEmail("Ann@gmail.com", "Bob@mail.com", "Simple letter", "Hello, what are you doing?");
sumTwoNumbers(5, 7);
sumTwoNumbers("5", "7");

var name = "Bill";
console.log(upperName(_templateObject, name)); //Hello BILL

function upperName(literals, value) {
    //literlas[0]=='Hello'
    return literals[0] + value.toUpperCase();
}

//(literals, value1, value2, value3, value4, value5, ...)
// function upperNames(literals, ...values) {
//     return literals[0]+values.toUpperCase();
// }