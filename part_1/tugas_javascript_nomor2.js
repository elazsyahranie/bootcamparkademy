const matematika = 69; 
const bahasaIndonesia = 69; 
const bahasaInggris = 69; 
const ipa = 70; 

var nilaiUjian = [matematika, bahasaIndonesia, bahasaInggris, ipa]; 

var jumlahNilai = 0; 
for (i in nilaiUjian) {
    jumlahNilai += nilaiUjian[i];
} 

var rataRata = jumlahNilai / nilaiUjian.length; 
console.log();

console.log(`RATA-RATA - ${rataRata}`);




if (rataRata = 100 && rataRata >= 90) {
    return console.log(`GRADE - A`);
} else if (rataRata >= 80 && rataRata <= 89) {
    return console.log(`GRADE - B`);
} else if (rataRata >= 70 && rataRata <= 79) {
    return console.log(`GRADE - C`);
} else if (rataRata >= 60 && rataRata <= 69) {
    return console.log(`GRADE - D`);
} else if (rataRata >= 0 && rataRata <= 59) {
    return console.log(`GRADE - E`);
} else {
    return console.log(`Grade Unavailable`);
}
console.log();