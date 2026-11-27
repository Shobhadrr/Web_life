//! cafe
function orderfood(callback){
    setTimeout(()=>{
        console.log("Food is ordereded");
        callback()
    },2000);
}

function preparefood(callback){
    setTimeout(()=>{
        console.log("Food is prepared");
        callback()
    },2000);
}
function payment(callback){
    setTimeout(()=>{
        console.log("Your payment is done");
        callback()
    },2000);
}

function takeAway(callback){
    setTimeout(()=>{
        console.log("Food is ready to take your food");
        callback()
    },2000);
}
orderfood(()=>{
    preparefood(()=>{
        payment(()=>{
        takeAway(()=>{
            console.log("Enjoy your food");
            
        })
    })
    })
})



