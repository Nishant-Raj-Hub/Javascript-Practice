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
const obj = {
    name: "Noddy",
    age: 23,
    location: "jaipur",
};

console.log(`The items of object are ${obj.age} ${obj.name}`);