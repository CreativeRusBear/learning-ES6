let symbol = Symbol('name'),
    symbol2 = Symbol('name');
console.log(symbol);
console.log(symbol2);
console.log(symbol===symbol2);

let symbol3 = Symbol.for('name'),
    symbol4 = Symbol.for('name');
console.log(symbol3===symbol4);
let nameOfSymbol3 = Symbol.keyFor(symbol3);
console.log(nameOfSymbol3);




let password=Symbol();
let user={
    username: 'admin',
    // [Symbol.for('password')]: 'h2o'
    [password]: 'h2o',
    password: '555'
};

console.log(user.password);
console.log(Object.keys(user));
//получение значения своства password
// let password = user[Symbol.for('password')];
// console.log(password);

//посмотреть сиволы у объекта
console.log(Object.getOwnPropertySymbols(user));


let object = {
    iterator: 0,
    [Symbol.iterator](){

    }
}