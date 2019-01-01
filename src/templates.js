function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Bill");

function messageEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

function sumTwoNumbers(x,y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

messageEmail("Ann@gmail.com", "Bob@mail.com", "Simple letter", "Hello, what are you doing?");
sumTwoNumbers(5,7);
sumTwoNumbers("5","7");


let name= "Bill";
console.log(upperName`Hello ${name}`);//Hello BILL

function upperName(literals, value) {
    //literlas[0]=='Hello'
    return literals[0]+value.toUpperCase();
}

//(literals, value1, value2, value3, value4, value5, ...)
// function upperNames(literals, ...values) {
//     return literals[0]+values.toUpperCase();
// }