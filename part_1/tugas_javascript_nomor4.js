//SOAL NOMOR SATU
let myData = {
    name: "Elazar Ibrahim",
    email: "elazaribrahims@gmail.com", 
    hobby: "Programming"
};

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...myData,
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    };

//SOAL NOMOR 2 
let {address: {street}, address: {city}} = data;

console.log(`--Soal Nomor 1--`); 
console.log(data);
console.log();
console.log(`--Soal Nomor 2--`);
console.log(`${street}, ${city}`);

