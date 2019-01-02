//парметры по умолч.
function greet(greeting = "Hello", name = "friend") {
    console.log(`${greeting} ${name}`);
}

greet("Hi", "Bob");
greet(undefined, "Bill");
greet("Hey");
greet();

//когда неизвестно сколько агрументов будут передаваться
function sum(...values) {
    console.log(values);
    let sum=0;
    values.forEach(function (item) {
        sum+=item;
    });
    console.log(`Sum = ${sum}`);
}

//анлогичный способ
function sumWithReduce(...values){
    console.log(values.reduce((previousValue, currentValue) => {
        return previousValue+currentValue;
    }));
}
sum(1,2,3,4,5);
sumWithReduce(1,2,3,4,5);