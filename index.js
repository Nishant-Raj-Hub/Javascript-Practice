// const student = {
//     name: 'John',
//     age: 24,
//     gender: 'male'
// }

// console.log(student.name +"\n" + student.age);

// EXPONENTIATION
// const a = 2;
// const b = 3;

// console.log(a ** b);

// SWITCH CASE
// const day = 'monday';
// switch (day){
//     case 'sunday':
//         console.log("sunday");
//         break;
//     case 'tuesday':
//         console.log("tuesday");
//         break;
//     default:
//         console.log("default")
// }

// get user to input a number using prompt. check if number is multiple of 5 or not
// let number = prompt("Enter a number:");
// if(number % 2 == 0){
//     console.log("even")
// }else if(number % 2 !== 0){
//     console.log("odd");
// }

//make an array
// let arr = [1,2,3,4,5,6,7,8,9,10, 29];

// for(let i of arr){
//     console.log(i);
// }
// console.log("size of array: " + arr.length);

// FOR IN loop
// let student = {
//   name: "Noddy",
//   age: 23,
//   location: "jaipur",
// };

// for(let key in student) {
//   console.log(key + " " + student[key]);
// }

//print even number from 0 to 100
// for( let i=0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//TEMPLATE LITERALS & STRING INTERPOLATION
// const obj = {
//     name: "Noddy",
//     age: 23,
//     location: "jaipur",
// };

// console.log(`The items of object are ${obj.age} ${obj.name}`);

//ESCAPE CHARACTERS LIKE (\n, \t)
// console.log("Tony\nStark");

//STRING METHODS
// let str = "Helloldsknfsdoi";
// console.log(str.slice(0, str.length));

// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1.concat(" " +    str2);
// console.log(str1.concat(" " + str2));

// let str = "Noddy";
// console.log(str.replace("N", "L"));

//Practice question
// const userFullName = prompt("Enter your full name");
// const userName = (userFullName.toLowerCase()) + userFullName.length;
// console.log(userName);

//PRACTICE QUESTION
// let price = [250, 645, 300, 900, 50];

// let idx=0;
// for (let val of price) {
//     let offer = val - (val/10);
//     price[idx] = offer;
//     idx++;
// }

// for (let val of price) {
//   console.log(val);
// }

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(companies.length , 0, "Amazon");
// console.log(companies);

//REVERSE STRING
// let str = "hello world";
// let str1 = str.split(" ");

// let hello = str1[0];
// let world = str1[1];

// console.log(hello.split("").reverse().join("")+ " " + world.split("").reverse().join(""));

// const vowels = (str) => {
//   let count = 0;

//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowels("noddyaeiu");


//FOR EACH LOOP
let arr = [1,2,3,4,5,6];

arr.forEach((val)=>{
    console.log(val*val);
})
