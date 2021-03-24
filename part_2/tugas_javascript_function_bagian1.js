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
  Bertujuan untuk mem-parse string dan me-return integer.  
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
console.log(`-3. parseFloat()-`);
//3. parseFloat()
var one = parseInt("120");
var two = parseInt("20.3"); 
var three = parseInt(20.2);
var four = parseInt("20 times I called you!")
var five = parseInt("F20");
var six = parseInt("11B11");
var seven = parseInt("0x112")
console.log(`${one} \n${two} \n${three} \n${four} \n${five} \n${six} \n${seven}`);

console.log(); 
console.log(`-4. escape()-`);
//4. escape()
/* 
  Berfungsi untuk mengkodekan (decode) suatu string. 
  Jika kita gunakan escape() pada satu string, terutama string yang terdiri lebih dari satu kata, maka pada outputnya akan terdapat 
  karakter-karakter yang "tidak biasa" yang menggantikan spasi yang kosong. Fungsi ini dapat membuat sebauh string menjadi portable. 
*/
var encodeString = `Assalamu'alaikum kawan-kawan!`; 
var escapeEncodeString = (escape(encodeString))
console.log(escapeEncodeString);

console.log(); 
console.log(`-5. unescape()-`); 
//5. Unescape 
/* 
  Kebalikan dari fungsi escape(), yaitu untuk menghilangkan (decoding) kode pada string yang telah di decode. 
*/
console.log(unescape(escapeEncodeString));

console.log(); 
console.log(`-6. isFinite()-`); 
//6. isFinite() 
/* 
  Menentukan apakah sebuah number termasuk number finite. Jika number tersebut termasuk +infinite, -infinite, atau NaN, maka 
  isFinite() akan me-return 'false'.
*/
let satu = 20; 
let dua = 120; 
let tiga = "12 + 12"; 
let empat = "20/02/1995"; 
let lima = "2021" 

console.log(`${isFinite(satu)} \n${isFinite(dua)} \n${isFinite(tiga)} \n${isFinite(empat)} \n${isFinite(lima)}`);
console.log(); 
console.log(`-7. isNaN()-`); 
//7. isNaN() 
/* 
  Menentukan apakah value yang kita masukkan adalah number atau number illegal (Not-a-Number, Nan).
*/
console.log(isNaN(200));
console.log(isNaN('20')); 
console.log(isNaN('Hallo'));

console.log(); 
console.log(`-8. Number()-`); 
//8. Number() 
/* 
  Merubah value yang kita masukkan menjadi number. 
*/
console.log(Number(20));
console.log(`${Number(false)} ${Number(true)}`); 
console.log(Number(`1200 12000`)); 

console.log(); 
console.log(`-9. encodeURI()-`)
//9. Encode URI 
/* 
  Untuk men-decode URI 
*/

let encodeExample = "data: myobject"
console.log(encodeURI(encodeExample));

console.log(); 
console.log(`-10. decodeURI()-`);
//10. Decode URI 
/* 
  Untuk men-decode URI
*/ 
console.log(decodeURI(encodeExample));


