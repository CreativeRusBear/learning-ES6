'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JavaScript', 'PHP', 'Python', 'Java', 'C#'];
var js = languages[0],
    php = languages[1],
    py = languages[2],
    java = languages[3],
    c = languages[4];

console.log(js, php, py, java, c);

var scores = [3, 4, 5];
//в данном случае, значение 4 не присавиается переменной (пропусается)
var low = scores[0],
    high = scores[2];

console.log(low, high);

var names = ['Bob', 'Angela', 'Nina', 'Andrew', 'Tom'];
//в данном случае, значения 'Nina', 'Andrew' и 'Tom' будут являться эл-ми массива persons
var Bob = names[0],
    Angela = names[1],
    persons = names.slice(2);

console.log(Bob, Angela, persons);

var countries = ['Russia', 'Germany', 'Spain'];
//в данном случае, для переменной It используется значение по умолч.
var Ru = countries[0],
    Gr = countries[1],
    Sp = countries[2],
    _countries$ = countries[3],
    It = _countries$ === undefined ? 'Italy' : _countries$;

console.log(Ru, Gr, Sp, It);

var data = [3, 4, [5, 6]];
var first = data[0],
    second = data[1],
    third = data[2];

console.log(first, second, third);
var fourth = void 0;
//в данном случае, мы полностью разделили массив и присовили его эл-ты переменным
first = data[0];
second = data[1];

var _data$ = _slicedToArray(data[2], 2);

third = _data$[0];
fourth = _data$[1];

console.log(first, second, third, fourth);

//Деструктивное присваивание можно использовать в функциях
function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}

computeScore([3, 4]);