function test(){
  return console.log("test");
} 
test();

//EXPRESSION FUNCTION
const test2 = function(){
  return console.log("test");
}
test2();

const test3 = () => {
  return console.log("test");
}
test3();

const additional = (num1, num2) => {
  const penjumlahan = num1 + num2;
  return penjumlahan;
}
console.log(additional(1, 2));