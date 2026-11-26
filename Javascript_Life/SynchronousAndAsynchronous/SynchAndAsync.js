//! Synchronous code excuted

// console.log("program started");
// console.log("progrm mid");
// for(let i=0; i<102343; i++) {
//     console.log("Loading");
// }
// console.log("Dealing with impData");
// console.log("program ended");

//!Asynchronous code excution
console.log("progrm started");
console.log("progrm mid");
// function handlingData(){
//     // for (let i=0; i<102; i++){
//     //     console.log("Loading...");
        
//     // }
//     console.log("done with program");
// }
// setTimeout(handlingData,5000)
// setTimeout(handlingData,3000)
// setInterval(handlingData,2000)

// clearTimeout(handlingData)
// setTimeout(handlingData,5000)

let interval=setInterval(()=>{
    console.log("progrm....");
    
},1000)
setTimeout(()=>{
    clearInterval(interval)
},5000)
console.log("Dealing with impData");
console.log("progrm ended");









