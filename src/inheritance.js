class Task {
    constructor(title){
        this._title=title;
        this.done=false;
        Task.count++;
        console.log('Создание задачи');
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title=value;
    }
    complete(){
        this.done=true;
        console.log(`Задача "${this._title}" выполнена`);
    }
    static getDefaultTask(){
        return 'Задача';
    }
}
Task.count=0;
//наследование
class SubTask extends  Task{
    constructor(title,parent){
        //вызвает конструктор родительского класса
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }
    //переопределение унаследованного метода
    // complete() {
    //     this.done=true;
    // console.log(`Подзадача "${this.title}" выполнена`);
    // }

    complete() {
        //вызов метода родительского класса
        super.complete();
        console.log(`Подзадача "${this._title}" выполнена`);
    }
}

let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6', task);
task.complete();
subtask.complete();

console.log(SubTask.getDefaultTask());
console.log(SubTask.count);

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);