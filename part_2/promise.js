/*
let janjian = new Promise ((resolve, reject)=>{
  let success = true
  if(success){
    resolve ('Berhasil!')
  } else {
    reject (new Error('Janji dibatalkan!'));
  }
}); 

console.log(janjian);


function divide (a, b) {
  return new Promise(function (resolve, reject){
    if (b === 0){
      reject(new Error(`You cannot divide by 0!`));
      return;
    }
    resolve(a / b);
  });
}

divide(10, 0).then(function(result) {
  console.log(`Division success:${result}`);
}).catch(function (error) {
  console.log(`There was an error!`)
  console.log(error)
});
*/

console.log(); 
let bikinJanji = (a, b) => {
 return new Promise(function(resolve, reject){
  if (a === 0 || b === 0) {
    reject(`Tidak bisa membagi dengan angka 0`)
    return;   
    }
    resolve (a / b); 
 }) 
}

bikinJanji(2, 0).then(function(result) {
  console.log(`Division success:${result}`);
}).catch(function (error) {
  console.log(error)
});