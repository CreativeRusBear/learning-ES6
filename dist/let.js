"use strict";

var btns = document.querySelectorAll("button");

var _loop = function _loop(i) {
    button = btns[i];

    button.innerText = i;
    button.onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < btns.length; i++) {
    var button;

    _loop(i);
}

if (true) {
    //let видна в пределах блока, поэтому в коносли будет ошибка
    var _version = "ES6";
}

console.log(version);