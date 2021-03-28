// function main(param1,param2,callBack){ 
//   console.log(param1, param2) 
//   callBack()  
// }

// function myCallback(){ 
//   console.log ('hello callback')
// }

// console.log(main(1,2,myCallback)); 

// function calculate(param1,param2,callback){
//   //default operation
//   result = param1 + param2
  
//   // callback is function ?
//   if (typeof callback == 'function'){
//    result= callback(param1,param2)
//   }
  
//   return result
// }

// //execute
// a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
// b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
// console.log(a) // $ 6000
// console.log(b) // $ 14000



function p1() {
  console.log('p1 done')
 }
 
 function p2(callback) {
  setTimeout(
   function() {
    console.log('p2 done')
     callback()
   },100
   )
 }
 
 function p3() {
   console.log('p3 done')
 }
 p1()
 p2(p3)