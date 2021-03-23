console.log(`-1. eval()-`)
//1. eval()
/* 
  Digunakan untuk mengevaluasi sebuah (atau dua buah, atau lebih) string dalam JavaScript, dan me-return value dari string tersebut. 
  eval(expression)
*/

var x = 10;
var y = 20;
var a = eval("x * y") + "\n";
var b = eval("2 + 2") + "\n";
var c = eval("x + 17");

var res = a + b + c;
console.log(res);

var a = eval("100 + 100");
var b = eval("100 + 100");
console.log(a + b);

console.log();
console.log(`-2. parseInt-`)
// 2. parseInt()
/* 
  Bertujuan untuk merubah string menjadi number, dan juga merubah bilangan desimal menjadi bilangan bulat.  
  CATATAN: 
  -Hanya nomor pertama pada string yang akan diconvert menjadi number. Jika karakter pertama pada string bukanlah sebuah angka, maka
  ketika kita cetak outputnya akan menjadi "NaN".
*/

var a = parseInt("120");
var b = parseInt("20.3"); 
var c = parseInt(20.2);
var d = parseInt("20 times I called you!")
var e = parseInt("F20");
console.log(`${a} \n${b} \n${c} \n${d} \n${e}`);

console.log();
console.log(`-3. escape()-`);
//3. escape()
/* 
  Berfungsi untuk mengkodekan suatu string. 
  Jika kita gunakan escape() pada satu string, terutama string yang terdiri lebih dari satu kata, maka pada outputnya akan terdapat 
  karakter-karakter yang "tidak biasa" yang menggantikan spasi yang kosong. Fungsi ini dapat membuat sebauh string menjadi portable. 
*/
var encodeString = `Assalamu'alaikum kawan-kawan!`; 
console.log(escape(encodeString));

