console.log("Soal 1 :")

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(data) {
    var tampung = ""
    for (var i = 0; i < data.length; i++) {
        tampung += "Nomor ID : " + data[i][0] + "\nNama Lengkap: " + data[i][1] + "\nTTL : " + data[i][2] + data[i][3] + "\nHobi : " +
            data[i][4] + "\n"
    }

    return tampung
}
console.log(dataHandling(input))

console.log("Soal 2")

function perkenalan(biodata) {
    return "Jawaban : " +
        "Nama saya " + biodata.name + ", umur saya " + biodata.age + ", Alamat saya di " + biodata.address + ", dan saya punya hobby yaitu " + biodata.hobby + "\n"
}
var dataBio = { name: "Brian", age: 30, address: "Jalan Pelesiran", hobby: "Gaming" }

var perkenalan = perkenalan(dataBio)
console.log(perkenalan)


console.log("Soal 3 :")

function balikKata(kata) {
    var hasil = ""
    var panjangObj = kata.length
    for (var a = panjangObj - 1; a >= 0; a--) {
        hasil += kata[a];
    }
    return hasil
}
console.log("Jawaban :")
console.log(balikKata("SanberCode"))
console.log(balikKata("racecar"))
console.log(balikKata("kasur rusak"))
console.log(balikKata("haji ijah"))
console.log(balikKata("I am Sanbers"))

console.log("\nSoal 4 :")

function hitung_huruf_vokal(string) {
    var lowercaseString = string.toLowerCase();
    var hitung = 0;
    for (var i = 0; i < lowercaseString.length; i++) {
        var vokal = lowercaseString[i];
        if (vokal === 'a' || vokal === 'e' || vokal === 'i' || vokal === 'o' || vokal === 'u') {
            hitung++;
        }
    }

    return hitung;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log("Jawaban :" +
    hitung_1, hitung_2);