//! ex -1
// console.log(data); //!undefind
// var data="somu"
// console.log(data); //!somu
//? it will work only var. and let and const it thow an error

//!internal
// var data;
// console.log(data);
// data ="somu"
// console.log(data);

//* hoisting procees of same even var, let ,const keyword but where  let and const it rigion called as Tdz beouces (it time between declar var and intial var)
//*TDZ(Temporal Dead Zone) means where cannot accesss it is dead

// let data ="somu"
// console.log(data);

// let data =undefined //internally it will stores like this
// data="somu"
// console.log(data);

//! function excuteion context
//! ex-1
// console.log(data);
// function print(){
//     console.log(print);
// }
// var data="somu"
// console.log(data);
// print()

//!ex-2
// console.log(data);
// function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data="somu"
// console.log(data);
// print()

//! ex 3 
// console.log(data);
// printFun()//here the undefined() is called as the function
// var printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data); //out :TypeError: printFun is not a function

//*3.1 ex
// console.log(data);
// printFun() 
// let printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);// out ReferenceError: Cannot access 'printFun' before initialization

//*3.2 ex
// console.log(data); 
// let printFun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);
// printFun()

//out:
// undefined
// somu
// somu
// rani

//! example of global scope
// console.log(data);
// function print(){
//     let name = 'shobha'    
//     console.log(data);
//     console.log(name);
// }
// var data = "somu"
// console.log(data);
// print()

//out
// undefined
// somu
// somu
// shobha

//! ex--o
// let x=10
// function print(){
//     x=20
//     console.log(x);
    
// }
// print()
// console.log(x); //20 20

//ex--
// let x=10
// function print(){
//      let x=20
//     console.log(x);
    
// }
// print()
// console.log(x);//20 10


//!exmaple of function scope
// console.log(data);
// function print(){
//     var name = "rani"
//     console.log(data);
// }
// print()
// console.log(name);
// var data = "somu"
// console.log(data); //ReferenceError: name is not defined


// console.log(data);

// function print() {
//     console.log(print);
// }

// let data = "somu";

// console.log(data);

// print();

//! Block scope
// let flag = true
//  if(flag){
//     let data =100
//     console.log("value of data is" + data);
// }
// else{
//     let data =200
//     console.log("value of data is" + data);
// }
// console.log(data); // get error like ReferenceError: data is not defined


//! using var keyword in  block scope
// let flag = true
//  if(flag){
//     var data =100
//     console.log("value of data is" + data);
// }
// else{
//     var data =200
//     console.log("value of data is" + data); //value of data is100
// }

//! Scope Chaninig
let data1= "somu"
function outerFunction(){
    let data2 = "rani"
    function innerFunction(){
        let data3= "Raja"
        console.log(data1);
        console.log(data2);
        console.log(data3);     
    }
    innerFunction()
}
outerFunction()












