// Оператор разворота (spread operator)
let staticLanguages = ["C", "C++", "Java"],
    dynamicLanguages = ["JavaScript", "PHP", "Ruby"];
//массив всех языков (в 3 массивах)
let languages = [...staticLanguages,"C#",...dynamicLanguages,"Python"];
console.log(languages);
//result:
// 0: "C"
// 1: "C++"
// 2: "Java"
// 3: "C#"
// 4: "JavaScript"
// 5: "PHP"
// 6: "Ruby"
// 7: "Python"

function summ(x,y,z) {
    console.log(x+y+z);
}

let numbers = [3,4,5];
summ(...numbers);//12