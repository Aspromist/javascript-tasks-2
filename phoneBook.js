'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

function isValidPhone(phone) {
    var phoneRegExp = /^(\+?\d{1,2})?\s?(\(\d{3}\)|\d{3})\s?\d{3}(\-\d\-|\s\d\s|\d)\d{3}$/;
    return phoneRegExp.test(phone);
}

function isValidEmail(email) {
    var emailRegExp = /^([a-z0-9._-])+@([a-zа-я0-9_-]+\.)+([a-zа-я]+)$/;
    return emailRegExp.test(email.toLowerCase());
}


/*
     Функция добавления записи в телефонную книгу.
     На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
// Ваша невероятная магия здесь
    if (isValidPhone(phone) && isValidEmail(email)) {
        var note = {
            name: name,
            phone: phone,
            email: email
        }
        phoneBook.push(note);
        console.log("Added note")
    } else {
            console.log("Something wrong");
      }
}

/*
     Функция поиска записи в телефонную книгу.
     Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
// Ваша удивительная магия здесь
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.indexOf(query) !== -1 || phoneBook[i].phone.indexOf(query) !== -1 ||
            phoneBook[i].email.indexOf(query) !== -1) {
            console.log(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email);
        }
    }
}

/*
     Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
// Ваша необьяснимая магия здесь
    var delCount = 0;
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.indexOf(query) !== -1 || phoneBook[i].phone.indexOf(query) !== -1 ||
            phoneBook[i].email.indexOf(query) !== -1) {
            phoneBook.splice(i, 1);
            delCount++;
        }
    }
    console.log("Removed " + delCount + " notes");
}

/*
     Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
// Ваша чёрная магия:
// - Разбираете записи из `data`
// - Добавляете каждую запись в книгу
    var data = require('fs').readFileSync(filename, 'utf-8');
    var notes = data.split(/\n/);
    var splitNote;
    for (var i = 0; i < notes.length; i++) {
        splitNote = notes.split(";");
        module.exports.add(splitNote[0], splitNote[1], splitNote[2])
    }

}

/*
     Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

        // Ваша чёрная магия здесь

}
