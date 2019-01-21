//объявление ф-ии - генератор
function* generate() {
    console.log('Start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Finish');
}
console.log('Пример работы генератора');
console.log(generate());
let iterator = generate();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//итератор
function Generate(){
    let current =1;
    console.log('Start');
    return {
        [Symbol.iterator](){
            return {
                next() {
                    let result = {value: undefined, done: true};
                    if (current<=3){
                        result.value= current;
                        result.done=false;
                        current++;
                    }else{
                        console.log('Finish');
                    }
                    return result;
                }
            };
        }
    };
}
console.log('Пример работы итератора');
iterator=Generate()[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());





function* range(start, end) {
    let current=start;
    while (current<=end){
        yield current++;
    }
}

console.log('Пример работы генератора');
for (let num of range(1,10)){
    console.log(num);
}

//генератор у объекта
let Nums = {
    *secondRange(start,end){
        let current=start;
        while (current<=end){
            yield current++;
        }
    }
};

console.log('Генератор у объекта');
for (num of Nums.secondRange(1,10)){
    console.log(num);
}
