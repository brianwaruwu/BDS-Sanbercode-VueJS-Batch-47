console.log("Soal 1")
const hitungLuasPersegiPanjang = (panjang, lebar) => {
    let luas = panjang * lebar;
    return luas;
};

const hitungKelilingPersegiPanjang = (panjang, lebar) => {
    let keliling = 2 * (panjang + lebar);
    return keliling;
};

// Contoh penggunaan fungsi
const panjang = 5;
const lebar = 3;

const luas = hitungLuasPersegiPanjang(panjang, lebar);
console.log("Jawaban: ");
console.log("Luas persegi panjang:", luas);

const keliling = hitungKelilingPersegiPanjang(panjang, lebar);
console.log("Keliling persegi panjang:", keliling);



console.log("Soal 2")
const newFunction = (firstName, lastName) => ({
    firstName,
    lastName,
    fullName() {
        console.log(`${firstName} ${lastName}`);

    }
});
console.log("Jawaban: ");
newFunction("William", "Imoh").fullName();

console.log("Soal 3")
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
};
console.log("Jawaban: ");
const { firstName, lastName, address, hobby } = newObject;



// Driver code
console.log(firstName, lastName, address, hobby);
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log("Soal 4 \nJawaban: ");
console.log(combined);

console.log("Soal 5")
const planet = "earth";
const view = "glass";
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log("Jawaban :");
console.log(before);