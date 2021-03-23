name = "Elazar Ibrahim Syahranie"; 
age = 25; 
hobbies = ["Menggambar", "Coding"]; 
isMarried = false; 
schoolList = [
    {
        schoolName: 'MI PKP Jakarta Islamic School', 
        yearIn: '2000', 
        yearOut: '2006', 
        major: null, 
    },
    {
        schoolName: 'MTs PKP Jakarta Islamic School', 
        yearIn: '2006', 
        yearOut: '2009', 
        major: null,
    }, 
    {
        schoolName: 'SMK 1 PKP Jakarta Islamic School', 
        yearIn: '2009', 
        yearOut: '2012', 
        major: 'Multimedia',
    },
];
skills = [
    {
        skillName: 'Drawing', 
        level: 'Advanced',
    }, 
    {
        skillName: 'Coding', 
        level: 'Beginner',
    }
]; 
interestInCoding = true; 

console.log(name); 
console.log(`${age}`); 
console.log(`${hobbies[0]} - ${hobbies[1]}`); 
console.log(); 
console.log("MARRIAGE")
console.log(`${isMarried}`); 
console.log();
console.log("SCHOOL")
schoolList.forEach((a) => {
    console.log(`${a.schoolName} - ${a.yearIn} - ${a.yearOut} - ${a.major}`)
});
console.log();
console.log("SKILL")
skills.forEach((b) => {
    console.log(`${b.skillName} - ${b.level}`)
});
console.log()
console.log(); 
console.log("INTEREST IN CODE");
console.log(`${interestInCoding}`)
console.log(); 
console.log();

