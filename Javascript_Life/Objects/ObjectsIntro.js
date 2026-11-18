// let userInformation ={
//     name:"somu",
//     IsLoggedIn:true,
//     age:23,



//     reading:function(){
//         console.log("Somu is reading");   
//     },
//     sleeping:function(){
//         console.log("somu is sleeping");
        
//     },
//     eating:function(){
//         console.log("somu is eating");
        
//     }
// }
// console.log(userInformation);




//! Information
// let object = {
//     name : "anushree",
//     age : 35,
//     flag : true
// }
// // console.log(object);
// console.log(object.name);
// console.log(object.age);
// in this code we can use anything in object name  xyz somthing anything

//! ex 3
let userInformation = {
    "@name": "somu",
    IsLoggedIn: true,
    age: 23,

    reading: function() {
        console.log("Somu is reading");
    },

    sleeping: function() {
        console.log("somu is sleeping");
    },

    FavColor: ['red', 'green', 'blue'],

    address: {
        city: "pune",
        pincode: 1235
    },

    7: "Lucky Number"
};

userInformation.reading();

let key = "name";
// console.log(userInformation.FavColor);
// console.log(userInformation.FavColor[0]);
// console.log(userInformation.address.pincode);

//^advantages
 //!1
// console.log(userInformation["name"]);
// console.log(userInformation[key]);
// console.log(userInformation["age"]);
// console.log(userInformation.key);

//!2
// console.log(userInformation.IsLoggedIn);
// console.log(userInformation["IsLoggedIn"]);
 //!3
// console.log(userInformation.@name);
console.log(userInformation["@name"]);


//! 4
// console.log(userInformation[7]);
// console.log(userInformation["7"]);

//~creating
// let userData = {
//     name:"somu",
//     age:80,
//     flag:true
// }
// //~ adding
// // userData.luckyNo = '8'
// // console.log(userData);

// //~upadting
// // userData.age =81
// // console.log(userData);

// //~deleting
// delete userData.flag
// console.log(userData);


//! Methods of object
//  let userData = {
//     name:"somu",
//     age:80,
//     flag:true
//  }
//  //^1. keys()
// //  console.log(Object.keys(userData));

//  //^2. values()
//  console.log(Object.values(userData));
 
//  //^3.entries
// //  console.log(Object.entries(userData));
// let newDataFormate = Object.entries(userData)
// console.log(newDataFormate);

// //^4.fromentries()
// console.log(Object.fromEntries(newDataFormate));

 
 














