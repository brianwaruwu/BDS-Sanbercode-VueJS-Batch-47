console.log("Soal 1")
var sentence = "I am going to be Vue JS Developer";

var exampleFirstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri 
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri 
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri 
var sixthWord = sentence[17] + sentence[18] + sentence[19]; // lakukan sendiri 
var seventhWord = sentence[21] + sentence[22]; // lakukan sendiri 
var eighthWord = sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32]; // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);


console.log("Soal 2")

var text1 = "selamat datang di sanbercode"
var text2 = "silahkan belajar tentang vue js"
var selamat = text1.substring(0, 7)
var belajar = text2.substr(9, 7)
var vue = text2.substr(25).toUpperCase()
var spasi = " "
var sanbercode = text1.substr(15)

console.log(selamat + spasi + belajar + spasi + vue + spasi + sanbercode)


console.log("Soal 3")

var kalimat3 = "selamat siang";
kata1kalimat3 = kalimat3.substring(0, 7);
kata2kalimat3 = kalimat3.substring(8);

console.log("Kata Pertama :" + kata1kalimat3)
console.log("Kata Kedua :" + kata2kalimat3)