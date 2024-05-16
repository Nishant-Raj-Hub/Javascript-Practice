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
// let arr = [1,2,3,4,5,6];

// arr.forEach((val)=>{
//     console.log(val*val);
// })

//PRACTICE QUESTIONS
// let arr = [67, 89, 90, 96, 93, 78, 66];

// let newArr = arr.filter((res)=>{
//     return res>90;
// })
// console.log(newArr);

//PRACTICE QUESTIONS
// let n = prompt("Enter size of an array:");
// let arr = new Array(n);

// for(let i=0; i<n; i++){
//     arr[i] = i+1;
// }

// let newArr = arr.reduce((prev, curr)=>{
//     return prev + curr;
// })
// console.log(newArr);

//UNION OF TWO ARRAY
// let arr1 = [1,2,3,5,3,6,1];
// let arr2 = [8,6,9,0,1];

// function union(arr1, arr2){
//     let newArr = arr1.concat(arr2).sort();
    
//     return newArr.filter((val, idx)=>
//         newArr.indexOf(val) == idx
//     )

// }

// console.log(union(arr1, arr2));

//SORT FUNCTION
// let arr = [1,12,34,5,6,7,67];

// const sortingxx = (a, b) => {
//     return a-b
// }
// let newArr = arr.sort(sortingxx);
// console.log(newArr);
// console.log(arr);

// let btn = document.querySelector("#btn");
// let currMode = "light";
// btn.addEventListener("click", ()=>{
//     let body = document.querySelector("body");
//     if(currMode === "light"){
//         body.style.backgroundColor = "black";
//         currMode = "dark";
//     }else{
//         body.style.backgroundColor = "blueviolet";
//         currMode = "light";
//     }
// })

//CALLBACK, PROMISES, AND ASYNC AWAIT
// let promise = new Promise((resolve, reject) => {
//   console.log("I am promise");
//   let a = 9;
//   if(a==5){
//     resolve("I am resolved noddy");
//   }
  
//   else{
//     reject("I am rejected noddy");
//   }
// });




//PROMISE
// const getPromise = () => {
//     return new Promise((resolve, reject)=>{
//         console.log("I am promise");
//         reject("failedddd");
//     })
// }


// let promise = getPromise();
// promise.then((res)=>{
//     console.log(".then method running", res)
// })
// promise.catch((err)=>{
//     console.log(".catch method running", err)
// })




// ASYNC AWAIT 

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data", dataId);
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getApiData(){
//     console.log("Fetching data 1")
//     await getData(1);
//     console.log("Fetching data 2")
//     await getData(2);
//     console.log("Fetching data 3")
//     await getData(3);
//     console.log("Fetching data 4")
//     await getData(4);
// }




//API DATA FETCHING
const URL = "https://official-joke-api.appspot.com/random_joke";

let joke = document.querySelector("#joke");

(async () => {
    let response = await fetch(URL);
    let data = await response.json();
    joke.innerText = data.setup + data.punchline;
    console.log(data);
})();