let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let penjumlahan = nilaiAwal + nilaiAkhir;
  let rataRata = penjumlahan / 2; 
  if (dataArray.indexOf(rataRata) > -1 === false) {
    return `Jumlah angka dalam Array tidak ada!`;
  } else {
    if (nilaiAwal >= nilaiAkhir) {
      return `Nilai akhir harus lebih besar dari nilai awal!`;
    } else if(nilaiAwal < nilaiAkhir) {
      return `${rataRata} - ${dataArray}`
    }
  }
}

console.log(seleksiNilai(5, 5, [5, 20, 13, 2, -2, 25]));
console.log(seleksiNilai(2, 12, [12, 3, 2, 4, 6, 23]));
console.log(seleksiNilai(2, 12, [12, 3, 2, 4, 7, 23]));


console.log();