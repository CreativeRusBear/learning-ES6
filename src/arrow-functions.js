let sum = (a,b)=>a+b;
//если передается один парметр, то скобки можно не ставить
let square = x => x*x;

let giveMeDate = () => new Date().toLocaleString();

let meeting = () => console.log('Hello, my friend');

//если в теле функции имеется несколько строк, то необходимо использовать фигурные скобки, а также необходимо использовать ключ. слово return (если нам необходимо вернуть полученное значение)
let multiplication = (x,y)=>{
    const result = x*y;
    return result;
};
//для того, чтобы вернуть литерал объекта, его неободимо обернуть в круглые скобки
let returnObj = ()=> ({name: 'Rose'});

console.log(square(5));
console.log(sum(2,7));
console.log(giveMeDate());
meeting();
console.log(multiplication(5,35));
console.log(returnObj());

//функция, которая вызвает сама себя
(function () {
    console.log('IIFE');
})();

//стрелочная функция, которая вызвает сама себя
(()=>console.log('IIFE'))();

const numbers =[1,2,3,4,5,6,7,8,9,10];
let sumElArr=0;
// numbers.forEach(function (value) {
//     sumElArr+=value;
// });

numbers.forEach(value=>sumElArr+=value);
console.log(sumElArr);

let squared = numbers.map(value=>value*value);
console.log(squared);

let person ={
  name: 'Angela',
  greet: function () {
      window.setTimeout(()=>{
          console.log(`Hi, my name is ${this.name}`);
          console.log(this);
      },2000);
  }  
};

person.greet();