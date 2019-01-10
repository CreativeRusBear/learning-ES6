let Task =class{
    constructor(){
        console.log('Какая-то задача');
    }
};

let SubTask = class extends Task{
    constructor(){
        super();
        console.log('Какая-то подзадача');
    }
}

let task = new Task();
let subtask = new SubTask();

console.dir(task);
console.dir(subtask);