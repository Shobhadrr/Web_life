//! Creating promise
// let myPromise = new Promise((resolve,reject)=>{
//     console.log("I am inside executor function");
//     // resolve("Data is recived")
//     reject("Data is not recived")
// })
// console.log(myPromise);

// //!Handling promise
// //! we have two ways to handle promise
// //! 1. Traditional way (.then() and catch())

// myPromise.then((data)=>{
//     console.log(data);    
// }).catch((err)=>{
//     console.log(err);
// })

//! 2 .Modern way (async and await)
// async function HandlingMyownPromise(){
//     let result =  await myPromise
//     console.log(result);  //Data is recived  
// }
// HandlingMyownPromise()

//! 3. To handle success and failure state we use try and catch()
// async function HandlingMyownPromise(){
//     try{
//      let result =  await myPromise
//      console.log(result);
//      }catch(err){
//      console.log(err);
//      }
        
// }
// HandlingMyownPromise()

//! craete a promise employe thumb login sucesssful or not like boolen valuse true or false
// let Employee = new Promise ((resolve,reject)=>{
//     let accpeted = false
//     if (accpeted){
//         resolve("Employee login accepted")
//     }
//     else{
//         reject("Employee login not accepetd")
//     }
// })
// async function HandlingMyownPromise(){
//     try{
//      let result =  await Employee
//      console.log(result);
//      }catch(err){
//      console.log(err);
//      }
        
// }
// HandlingMyownPromise()

//! cafe example for without using callback
function orderfood(){
    return new Promise((reslove) =>{
        setTimeout(()=>{
            console.log("Food is ordereded");
            reslove()            
        },2000);
    })
}
function preparefood(){
    return new Promise((reslove) =>{
        setTimeout(()=>{
            console.log("Food is prepared");
            reslove()            
        },2000);
    })
}
function takeAway(){
    return new Promise((reslove) =>{
        setTimeout(()=>{
            console.log("Food is ready to take your food");
            reslove()            
        },2000);
    })
}

//! withoust using callback hell
// orderfood().then(()=>{
//     return preparefood()
// }).then(()=>{
//     return takeAway()
// }).then(()=>{
//     console.log("Enjoy");
    
// })

//!Asynchronouu way to handle or modern way
async function handlingdata(){
    await orderfood()
    await preparefood()
    await takeAway()
    console.log("Enjoy your food");
}
handlingdata()