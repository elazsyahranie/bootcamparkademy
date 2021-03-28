// PROGRAM PERTAMA
const hitungHitungan = (a, b ) => {
  return new Promise((resolve, reject)=>{
    var aritmatika = a + b;
    if (aritmatika <= 250) {
      resolve(aritmatika)
    } else {
      reject(new Error('Mon maap, hasilnya kegedean'))
    }
  });
}

// hitungHitungan(10, 10).then (function (result) { 
//   console.log(`Cie ciee yang udah bisa ${result}`);

// // Tapi kalau ada error, maka .catch akan mendeteksinya dan mencetak output 
// // berdasarkan kode yang ada di dalamnya
// }).catch( function (error) {
//   console.log(`Mana bisa kayak gitu!`);
//   console.log(error);
// })

const hello = async () => {
  try {
    let result = await hitungHitungan(10, 10);
    console.log(result);
  } catch (error) {
    console.log("catch is running");
    console.log(error);
  }
};

hello();

// PROGRAM KEDUA

const cariNomor = (a) => {
  return new Promise((resolve, reject)=>{
    let someNumbers = [12, 20, 30, 40, 2, 4, 50, 13, 14]; 
    if (someNumbers.indexOf(a) > -1 === true) {
      resolve(a);
    } else if (someNumbers.indexOf(a) > -1 === false) {
      reject(new Error('Mon maap, hasilnya kegedean'))
    }
  });
}

const hello2 = async () => {
  try {
    let result = await cariNomor(13);
    console.log(result);
  } catch (error) {
    console.log("catch is running");
    console.log(error);
  }
};

hello2();