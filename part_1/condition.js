if (1 == true) {
    console.log(true);
} else {
    console.log(false);
} 

console.log()
const isError = true;
if (isError) {
    console.log(true);
} else {
    console.log(false);
}

// TRUE = true | 1 | angka selain 0 | string apapun 
// FALSE = false | 0 | null | undefined

const harga = 10000; 
if (harga > 1000) {
    console.log("Mahal");
} else if ( harga > 5000) {
    console.log('Sedang');
} else {
    console.log("Murah")
} 

//SWITCH CASE 
const phone = "ANDROID";

switch (phone) {
    case "IPHONE": {
        console.log("You're phone is iPhone");
        break;
    }
    case "ANDROID": {
        console.log("You're phone is Android");
        break;
    }
    default: {
        console.log("Your phone is not listed");
    }
}

//TERNARY OPERATOR 
if (harga > 10000) {
    console.log("Mahal");
} else {
    console.log("Murah");
}

harga > 10000 ? console.log("Mahal") : console.log("Murah");

//SHORT-LOGIC 
let nama = "Manusia"; 
if (nama) {
    console.log(nama);
} else {
    console.log(anonymous);
} 

let checkUsername = nama 

