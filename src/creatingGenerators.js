//создание генератора с помощью аноноимной функции
let generate=function* () {
    yield;
};

//создание генератора у объекта
let obj ={
    *generate(){

    }
};

//определение генератора у класса
class Object {
    *generator(){

    }
}
function* Generator(){
    //также с помощью yield можно возврщать значения
    let array = [yield,1+(yield)/*result = 2, т.к. мы передали в аргументе значение 1*/, yield];
    console.log(`Result: ${array}`);
}
let iterator = Generator();
console.log(iterator.next());
console.log(iterator.next(1));
console.log(iterator.next(1));//значение свойства done будет true, так как yield встречается в функции 2 раза
console.log(iterator.next(3));







function* generateArr() {
    yield* [1,2,3,5]; //yield* разделяет массив
}
function* generator2() {
    yield 41;
    yield* generateArr(); //вызывает функцию-генератор generateArr
    yield 'Hello';
}

iterator = generator2();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);



/*остановка генератора*/
function* someGenerator() {
    try {
        yield 1;
        yield 2;
        yield 3;
    }catch (e) {
        console.log(e);
    }
}

console.log(`
Метод return у генератора`);
iterator = someGenerator();
console.log(iterator.next());
console.log(iterator.return());//остановка генератора
console.log(iterator.next());

console.log(`
Метод throw у генератора`);
iterator=someGenerator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Ошибка')));//остановка генератора и вывод ошибки
console.log(iterator.next());
