var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]


readBooksPromise(10000, books[0])
    .then((waktu1) => {
        var sisaWaktu1 = readBooksPromise(waktu1, books[1])
        return sisaWaktu1
    })
    .then((sisaWaktu1) => {
        var sisaWaktu2 = readBooksPromise(sisaWaktu1, books[2])
        return sisaWaktu2
    })
    .then((sisaWaktu2) => {
        var sisaWaktu3 = readBooksPromise(sisaWaktu2, books[3])
        return sisaWaktu3
    }).then(() => {
        console.log("waktu habis")
    })
    .catch(
        error => console.log(error)
    )