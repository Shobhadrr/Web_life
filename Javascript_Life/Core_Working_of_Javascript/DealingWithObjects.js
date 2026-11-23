// let userInfo = {
//     name:"ramu",
//     age:80,
//     flag : false,
//      working: function(){
//         console.log('Ramu is working');      
//      }
// }
// console.log(userInfo);

//* function storing in the memory
// function add(a,b){
//     console.log(a+b);   
// }
// add(10,20)//30
// console.log(add.name);//add
// console.log(add.length);//2

//* pass data as value
let data1 =10
let data2 = data1

console.log(data1);
console.log(data2);

console.log("After update>>>");

data2 = 100
data1 = 900
console.log("data1" + data1);
console.log("data2" + data2);

// out
// 10
// 10
// After update>>>
// data1900
// data2100



//* pass data as refernece

// let obj1 ={
//     name:"somu",
//     age:30
// }
// obj2=obj1
// console.log(obj1);
// console.log(obj2);
// console.log('After update >>>>>>');

// obj2.age =100

// console.log(obj1.age);
// console.log(obj2);

//output
// { name: 'somu', age: 30 }
// { name: 'somu', age: 30 }
// After update >>>>>>
// 100
// { name: 'somu', age: 100 }



//!closure
function outerfunction() {
    console.log('outerfunction is stared');

    let outerfunctionData = 10
    function innerfunction() {
        console.log('innerfunction started');

        console.log("accessing outerfunction " + outerfunctionData);
        console.log("innerfunction is ended");


    }
    console.log('outerfunction ended');

    return innerfunction
}
let result = outerfunction()
result()

//out
// outerfunction is stared
// outerfunction ended
// innerfunction started
// accessing outerfunction 10
// innerfunction is ended


