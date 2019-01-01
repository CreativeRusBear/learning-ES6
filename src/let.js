var btns = document.querySelectorAll("button");
for (let i=0; i<btns.length;i++){
    var button = btns[i];
    button.innerText = i;
    button.onclick=function () {
      console.log(i);
    };
}


if (true){
    //let видна в пределах блока, поэтому в коносли будет ошибка
    let version = "ES6";
}

console.log(version);