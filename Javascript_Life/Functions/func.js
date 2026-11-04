// function Print(){
//     console.log("Hello Javascript");
//     console.log("How are you");
// }
// Print()//! without calling the function it will excute anything

// function morning(){
//     console.log("Good morning");

// }
// morning()

// function after(){
//     console.log("Good afternoon");

// }
// after()

// function evening(){
//     console.log("Good evening");

// }
// evening()

// function greet(anything) {
//     console.log("Welcome" + anything);

// }
// greet("rani")



// function greet(timing) {
//     if (timing >= 9 && timing < 12) {
//         console.log("Good morning");
//     }
//     else if (timing >= 12 && timing < 17) {
//         console.log("Good afternoon");
//     }
//     else {
//         console.log("Good evening");
//     }
// }
// greet(10);
// greet(14);
// greet(17);


//! function 3 Named function


// function TotalMarks(m,c,p,e,k){
//     console.log( m+c+p+e+k);
// }
// TotalMarks(60,40,80,35,99)

// function TotalMarks(m,c,p,e,k){
//     return m+c+p+e+k //  when need to add opertions then we can use
// }
// let result = TotalMarks(60,40,80,35,99)
// console.log(result +5);

//! function 4 by using anonymous function 
// let Bhoot = function () {
//     console.log("Hello I am bhoot");
// }
// Bhoot()

//!Arrow Function

//^ 1 without return keyword and {}
// let addition =(a,b) => a+b
// console.log(addition(10,20));

//^ 2 using single parameter
// let addition = a => a+20
// console.log(addition(10));

//^ 3 when we have no paramneter then we can use _
// let addition = _ => 20+20
// console.log(addition());

//^ explicite return 
// let addition =(a,b) =>{
//     return a+b;
// }
// console.log(addition(10,20));

//^ function expression
// let addition = function printAdd(){
//     console.log(10+20); 
// }
// addition()

//! 4. callback function
// function add(){
//     console.log(10+20);
// }
// function Task(Function){
//     Function()
// }
// Task(add)

//! anonymous function use case
// function Task(Function){
//     Function()
// }
// Task(
//     function(){
//         console.log(10+20);

//     }
// )

//! 5.Higer order function
// function Task(){
//     return function(){
//         console.log("Thank you");   
//     }
// }
// let result=Task()
// result()

//! Calculator
// function add(a, b) {
//     return a+b
//     // console.log(a+b);

// }
// function sub(a,b){
//     return a-b
// }
// function mulp(a,b){
//     return a*b
// }
// function div(a,b){
//     return a/b
// }
// function calci(callback, a,b){
//     console.log(callback(a,b));

//     // callback(a,b)
// }
// calci(sub,10,20)

//! exp  for hof and callback

// function Greeting() {
//     console.log("Welcome to xyz cafe");
//     console.log("you can order here");
//     // callback()
//     // chickenBiryani()
//     veg_Biryani()
// }

// function chickenBiryani() {
//     console.log("thank you for your order...");
//     console.log("your order Biryani is getting ready");
//     console.log("Here is your order.....");
// }

// function veg_Biryani() {
//      console.log("thank you for your order...");
//      console.log("your order veg_Biryani is getting ready");
//      console.log("Here is your order.....");

// }
// Greeting()
// // Greeting(chickenBiryani)
// // Greeting(veg_Biryani)

//!timing 
function Greeting(callback, takeway) {
    console.log("Welcome to xyz cafe");
    console.log("you can order here");
    callback(takeway)
}

function chickenBiryani(takeway) {
    setTimeout(() => {
        console.log("thank you for your order...");
        console.log("your order Biryani is getting ready");
        console.log("Here is your order.....");
        takeway()
    }, 5000)
}

function veg_Biryani(takeway) {
    setTimeout(() => {
        console.log("thank you for your order...");
        console.log("your order veg_Biryani is getting ready");
        console.log("Here is your order.....");
        takeway()
    }, 5000)

}

function takeway(){
    console.log("your takeway is ready");   
}
// Greeting(chickenBiryani,takeway)
Greeting(veg_Biryani,takeway)

  













