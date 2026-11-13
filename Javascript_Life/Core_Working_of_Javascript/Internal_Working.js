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
console.log(data);
function print(){
    let name = 'rani'
    console.log(data);
    console.log(name);
}
var data="somu"
console.log(data);
print()





