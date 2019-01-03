"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDo = function () {
    function ToDo() {
        var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ToDo.getDefaultTask();

        _classCallCheck(this, ToDo);

        this.task = task;
        this._done = false;
        ToDo.count++;
        console.log(this.task);
    }

    _createClass(ToDo, [{
        key: "complete",
        value: function complete() {
            this.done = true;
        }
        //Создание статического метода

    }, {
        key: "done",
        get: function get() {
            return this._done ? "\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.task + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430" : "\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.task + "\" \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430";
        },
        set: function set(value) {
            if (value !== undefined && typeof value == "boolean") {
                this._done = value;
            } else {
                console.error("Ошибка! Укажите значение true или false");
            }
        }
    }], [{
        key: "getDefaultTask",
        value: function getDefaultTask() {
            return "Какая-то задача";
        }
    }]);

    return ToDo;
}();

//Создание статического свойства


ToDo.count = 0;

var task = new ToDo("Прибраться в комнате");
console.log(task.done);
task.complete();
console.log(task.done);
console.log(task._done);
var task2 = new ToDo();

console.log(ToDo.count);