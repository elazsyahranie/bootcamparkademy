const matematika = 69; 
const bahasaIndonesia = 69; 
const bahasaInggris = 69; 
const ipa = 70; 

var nilaiUjian = [matematika, bahasaIndonesia, bahasaInggris, ipa]; 

var jumlahNilai = 0; 
for (i in nilaiUjian) {
    jumlahNilai += nilaiUjian[i];
} 

let rataRata = jumlahNilai / nilaiUjian.length; 
console.log();

console.log(`RATA-RATA - ${rataRata}`);

let pembulatan = Math.round(rataRata)
if (pembulatan = 100 && pembulatan >= 90) {
    return console.log(`GRADE - A`);
} else if (pembulatan >= 80 && pembulatan <= 89) {
    return console.log(`GRADE - B`);
} else if (pembulatan >= 70 && pembulatan <= 79) {
    return console.log(`GRADE - C`);
} else if (pembulatan >= 60 && pembulatan <= 69) {
    return console.log(`GRADE - D`);
} else if (pembulatan >= 0 && pembulatan <= 59) {
    return console.log(`GRADE - E`);
} else {
    return console.log(`Grade Unavailable`);
}