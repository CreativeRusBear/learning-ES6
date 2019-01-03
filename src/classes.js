class ToDo {
    constructor (task = ToDo.getDefaultTask()){
        this.task = task;
        this._done=false;
        ToDo.count++;
        console.log(this.task);
    }
    get done(){
        return this._done ? `Задача "${this.task}" выполнена` : `Задача "${this.task}" не выполнена`;
    }
    set done(value){
        if (value!==undefined && typeof value=="boolean"){
            this._done=value;
        }else {
            console.error("Ошибка! Укажите значение true или false");
        }
    }
    complete(){
        this.done=true;
    }
    //Создание статического метода
    static getDefaultTask(){
        return "Какая-то задача"
    }
}

//Создание статического свойства
ToDo.count=0;

const task = new ToDo("Прибраться в комнате");
console.log(task.done);
task.complete();
console.log(task.done);
console.log(task._done);
const task2 = new ToDo();

console.log(ToDo.count);
