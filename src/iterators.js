let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// console.info('for loop');
// for (let i=0; i<xmen.length;i++){
//     console.log(xmen[i]);
// }
//
// console.info('for...in loop');
// for (let key in xmen){
//     console.log(xmen[key]);
// }
//
// console.info('forEach loop');
// xmen.forEach(item=>console.log(item));

console.info('for...of loop');
for (let xman of xmen){
    console.log(xman);
}

// console.log(typeof xmen[Symbol.iterator]);

let iterator = xmen[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let next = iterator.next();
while (!next.done){
    console.log(next.value);
    next = iterator.next();
}


let randomGenerator = {
    generate(){
      return this[Symbol.iterator]();
    },
  [Symbol.iterator](){
      let count=1;
      return {
          next(){
              let value= Math.ceil(Math.random()*100);
              let done=count>10;
              count++;
            return {
                value, done
            };
          }
      };
  }
};

for(let random of randomGenerator){
    console.log(random);
}

let random = randomGenerator.generate();
console.log(`Random number is ${random.next().value}`);


class ArrayIterator {
    constructor(array){
        //сортировка по алфавиту
        this.array=array.map(item=>item).sort();
        this.index=0;
    }
    next(){
        let result = {value: undefined, done: true};
        if (this.index<this.array.length){
            result = {value: this.array[this.index], done: false};
            this.index++;
        }
        return result;
    }
}

class TaskList {
    constructor(){
        this.tasks=[];
    }
    addTasks(...tasks){
        this.tasks=[...this.tasks, ...tasks];
    }
    [Symbol.iterator](){
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks('Изучить ES6', 'Изучить Electron', 'Создать свое десктопное приложение');
taskList.addTasks('Сходить за продуктами', 'Погулять');
for (task of taskList){
    console.log(task);
}
