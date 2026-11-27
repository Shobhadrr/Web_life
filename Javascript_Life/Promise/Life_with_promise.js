//! Creating promise
let myPromise = new Promise((resolve,reject)=>{
    console.log("I am inside executor function");
    // resolve("Data is recived")
    reject("Data is not recived")
})
console.log(myPromise);

// //!Handling promise
// //! we have two ways to handle promise
// //! 1. Traditional way (.then() and catch())

myPromise.then((data)=>{
    console.log(data);    
}).catch((err)=>{
    console.log(err);
    
})