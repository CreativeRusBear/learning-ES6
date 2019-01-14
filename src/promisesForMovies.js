'use strict';
let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = ()=>{
            if (xhr.status===200){
                let json =JSON.parse(xhr.response);
                resolve(json.Search);
            }else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror=error=>reject(error);
        xhr.send();
    });
}

let batman=getData('http://www.omdbapi.com/?i=tt3896198&apikey=47b2d7f2&s=batman'),
    superman=getData('http://www.omdbapi.com/?i=tt3896198&apikey=47b2d7f2&s=superman');
// Возвращаемое значение
// Выполненный или отклоненный Promise в зависимости от результата первого завершенного из переданных в итерируемом объекте обещаний.
Promise.race([superman,batman])
    .then(films=>films.forEach(film=>addMovieToList(film)))
    .catch(error=>console.error(error));








// function go(number) {
//     return new Promise((resolve, reject)=>{
//         let delay = Math.ceil(Math.random()*3000);
//         console.log(`number=${number} delay=${delay}`);
//         setTimeout(()=>{
//             if (delay>2000){
//                 reject(number);
//             } else{
//                 resolve(number);
//             }
//         },delay);
//     });
// }

// let p1 = go(1);
// let p2 = go(2);
// let p3 = go(3);

// Метод возвращает обещание, которое выполнится тогда, когда будут выполнены все обещания, переданные в виде перечисляемого аргумента, или отклонено любое из переданных обещаний.
// Promise.all([p2,p1,p3])
//     .then(value => console.log(value))
//     .catch(error=>console.error(error));

// Promise.race([p2,p1,p3])
//     .then(value => console.log(value))
//     .catch(error=>console.error(error));