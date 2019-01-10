const languages = ['JavaScript', 'PHP', 'Python', 'Java', 'C#'];
let [js, php, py, java, c]= languages;
console.log(js, php, py, java, c);

const scores = [3,4,5];
//в данном случае, значение 4 не присавиается переменной (пропусается)
let [low, ,high]=scores;
console.log(low, high);

const names = ['Bob', 'Angela', 'Nina', 'Andrew', 'Tom'];
//в данном случае, значения 'Nina', 'Andrew' и 'Tom' будут являться эл-ми массива persons
let [Bob, Angela, ...persons] = names;
console.log(Bob, Angela, persons);

const countries = ['Russia', 'Germany', 'Spain'];
//в данном случае, для переменной It используется значение по умолч.
let [Ru, Gr, Sp, It='Italy'] =countries;
console.log(Ru, Gr, Sp, It);

const data = [3,4,[5,6]];
let [first, second, third] = data;
console.log(first, second, third);
let fourth;
//в данном случае, мы полностью разделили массив и присовили его эл-ты переменным
[first, second, [third, fourth]] = data;
console.log(first, second, third, fourth);

//Деструктивное присваивание можно использовать в функциях
function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3,4]);