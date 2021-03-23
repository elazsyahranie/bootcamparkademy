const hobby = ["swiming", "gaming"];
const newHobby = [...hobby, "karaoke", "hiking"];

console.log(newHobby);

const arr1 = [0, 1, 2]; 
const arr2 = [4, 5, 6]; 
const arr3 = [...arr1, 3, ...arr2]; 
console.log(arr3) 

//Object 
const object1 = {foo: "bar", x: 12};
const object2 = {foo: "baz", y: 10};

const object3 =  {...object1, ...object2}; 
console.log(object3);