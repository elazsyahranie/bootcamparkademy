var seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  var a = nilaiAwal + nilaiAkhir; 
  var b = a / 2;
  if (nilaiAwal > nilaiAkhir){
    return `Nilai akhir harus lebih besar dari nilai awal!`;
  } else if (nilaiAwal < nilaiAkhir) {
    return `Benar!`
  } else if (b !== dataArray) {
    return `Jumlah angka dalam dataArray tidak ada!`;
  } else if (b === dataArray) {
    return `Jumlah angka dalam dataArray ada!`;
  }
}

console.log(seleksiNilai(20, 10, [10, 12, 3, 45, 12, 14, 16]));
console.log(seleksiNilai(10, 20, [10, 12, 3, 45, 12, 14, 16]));
console.log(seleksiNilai(5, 5, [5, 12, 3, 45, 12, 14, 16]));