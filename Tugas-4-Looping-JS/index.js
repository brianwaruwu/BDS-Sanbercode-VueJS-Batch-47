console.log("Soal No 1 beserta jawaban");
var nilai = 75;

if (nilai >= 85) {
    console.log("Indeksnya A")
} else if (nilai >= 75 && nilai < 85) {
    console.log("Indeksnya B")
} else if (nilai >= 65 && nilai < 75) {
    console.log("Indeksnya C")
} else if (nilai >= 55 && nilai < 65) {
    console.log("Indeksnya D")
} else if (nilai < 55) {
    console.log("Indeksnya E")
}



console.log("Soal No 3 beserta jawaban");

var tanggal = 3;
var bulan = 3;
var tahun = 2000;
switch (bulan) {
    case 1:
        console.log("tanggal" + " " + "Januari" + " " + tahun)
        break
    case 2:
        console.log(tanggal + " " + "Februari" + " " + tahun)
        break
    case 3:
        console.log(tanggal + " " + "Maret" + " " + tahun)
        break
    case 4:
        console.log(tanggal + " " + "April" + " " + tahun)
        break
    case 5:
        console.log(tanggal + " " + "Mei" + " " + tahun)
        break
    case 6:
        console.log(tanggal + " " + "Juni" + " " + tahun)
        break
    case 7:
        console.log(tanggal + " " + "Juli" + " " + tahun)
        break
    case 8:
        console.log(tanggal + " " + "Agustus" + " " + tahun)
        break
    case 9:
        console.log(tanggal + " " + "September" + " " + tahun)
        break
    case 10:
        console.log(tanggal + "" + "Oktober" + "" + tahun)
        break
    case 11:
        console.log(tanggal + " " + "November" + " " + tahun)
        break
    case 12:
        console.log(tanggal + " " + "Desember" + " " + tahun)
        break
    default:
        console.log("Max input bula 12")
}


console.log("Soal No 3 beserta jawaban");


console.log("output untuk n=3");
var n = 3;
for (var i = 1; i <= n; i++) {
    var baris = '';
    for (var j = 1; j <= i; j++) {
        baris += '#';
    }
    console.log(baris);
}


console.log("output untuk n=7");
var x = 7;
for (var i = 1; i <= x; i++) {
    var baris = '';
    for (var j = 1; j <= i; j++) {
        baris += '#';
    }
    console.log(baris);
}