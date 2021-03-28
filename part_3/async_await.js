// const doAsync = () => {
//   setTimeout(() => {
//     return "Hello World !";
//   }, 2000);
// };

const doAsync = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hmmmm");
    }, 2000);
    setTimeout(() => {
      reject(new Error("Hello World yang gagal !"));
    }, 3000);
  });


const addResult = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + "Hellooooo");
    }, 3000);
    setTimeout(() => {
      reject(new Error("Hello World yang gagal !"));
    }, 4000);
  });

const showAsync = (data) => {
  return console.log(data);
};

// EXPRESION FUNCTION
const hello = async () => {
  try {
    console.log("try is running");
    let result = await doAsync(); // result = hello world (2 detik)
    // fungsi lain yang harus ditunggu juga
    let result2 = await addResult(result); // result2 = hello world hellooooo (3 detik)
    showAsync(result2); // (< 1detik)
    console.log("Hai World !"); // (< 1detik)
  } catch (error) {
    console.log("catch is running");
    console.log(error);
  }
};

hello();

// DECLARATION FUNCTION
// async function hello() {

// }

// =================================
// © 2021 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
