function applyForVisa(document) {
    console.log('Обработка документов...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random()>.5 ? resolve({}) : reject('Отказано в визе. Нехватка документов');
        },2000);
    });
    return promise;
};

function getVisa(visa){
    console.info('Виза получена');
    return new Promise(function (resolve, reject) {
        setTimeout(()=>resolve(visa),2000);
    });
}
function bookHotel(visa){
    console.log(visa);
    console.log('Бронируем номер в отеле');
    return Math.random()>.5 ? Promise.resolve(visa) : Promise.reject('Нет мест');
}

function buyTickets(booking){
    console.log('Покупаем билеты на смамолет');
    console.log('Бронирование',booking);
}



applyForVisa({})
    //далее
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    //если где-то произойдет ошибка, сработает catch
    .catch(error=>console.error(error));