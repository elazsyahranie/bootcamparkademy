// Nama function
const cekHariKerja = (day) =>{ 
  
  // Function promise yang akan kita praktikkan
  return new Promise((resolve, reject)=>{ 
    
    // setTimeout() untuk "menunda" dicetaknya output yang dihasilkan oleh function 'cekHariKerja'.
    setTimeout(()=>{  

      // Sebuah Array berisikan daftar hari. Kalau kita memasukkan nama hari yang tidak ada dalam Array ini, 
      // maka promise function akan mencetak output 'reject'.
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']  
      
      // Arrow function untuk menghubungkan Array 'dataDay' dengan 'if else' yang ada di bawah Arrow function ini. 
      // Jadi, jika argumen yang kita masukkan sesuai dengan salah satu properti pada 'dataArray', maka function 'cekHariKerja' 
      // bawah akan mencetak 'resolve'. Jika tidak sesuai, maka yang akan dicetak adalah 'reject'. 
      let cek = dataDay.find((item)=>{
        return item === day
      })

      //Kondisi 'if else', apakah 'resolve' atau 'cek'?
      if(cek){
        resolve(cek)
      }else{
        reject(new Error(`Hari ini bukan hari kerja!`))
      }
    }, 3000) //Durasi dari setTimeout()
  });
} 

// .then untuk menampilkan ouput dari promise function di atas apabila tidak ada error
cekHariKerja('senin').then (function (result) { 
  console.log(`${result} - Then... Catch`);

// Tapi kalau ada error, maka .catch akan mendeteksinya dan mencetak output 
// berdasarkan kode yang ada di dalamnya
}).catch( function (error) {
  console.log(`Mana bisa kayak gitu!`);
  console.log(error);
})

const hello = async () => {
  try {
    let result = await cekHariKerja('senin');
    console.log(`${result} - try... catch`);
  } catch (error) {
    console.log("catch is running");
    console.log(error);
  }
};

hello();