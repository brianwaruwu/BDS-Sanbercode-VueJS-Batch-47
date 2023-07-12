var readBooks = require('./callback.js')

var Post = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 },
]

readBooks(10000, Post[0], function(sisaWaktu1) {
    readBooks(sisaWaktu1, Post[1], function(sisaWaktu2) {
        readBooks(sisaWaktu2, Post[2], function(sisaWaktu3) {
            readBooks(sisaWaktu3, Post[3], function(sisaWaktu4) {
                console.log(`sisa waktu habis ${sisaWaktu4}`)
            })
        })
    })
})