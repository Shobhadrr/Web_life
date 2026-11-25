//!1. Count all the odd numbers in an array
// let arr=[1,2,3,4,5,6,7,8,9,10,]
// let result=arr.filter(item => item%2!==0).length;
// console.log(result);//5

//!2. Find the sum of squares of all elements
// let data = [1,2,3,4,5]
// let result = data.map(item=> item ** 2)
// console.log(result); //55

//!3. Count numbers divisible by both 2 and 3
// let data = [2,3,6,12,15,18,20,24]
// let result = data.filter(item => item%2==0 && item%3==0).length;
// console.log(result);//4

//!4 Find the total number odd char in all the string
// let data = ["Ram", "Shobha", "Radhika"];

// let result = data.map(item => {
//     return item.split('').filter((char, index) => index % 2 !== 0).length;
// }).reduce((acc, cur) => acc + cur);

// console.log(result); // 7


let data = ["Ram", "Shobha", "Radhika"];
let result = data.map(item => item.length).reduce((acc, cur) => acc + cur);
console.log(result); // 16

