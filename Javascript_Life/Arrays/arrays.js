// console.log("Hello Array");

// let data = [1,2,3,4,5]
// console.log(data);


// let data  = ["somu",80,true]
// // console.log(data);
// // console.log(typeof data);
// data[1] = "hii"
// console.log(data);

// //! legnth
// console.log(data.length);

//! how use  function inside  array
// let data = ["somu",80,true,function(){console.log("Hello Iam inside array as item of array")}]
// data[3]()

//!  constrctor  array
// let array = new Array(10,20,30,40,50)
// console.log(array);

//!
// let array = [10]
// console.log(array);
// console.log(array.length);

//* if u pass single item in array it consider as  it treated as length of the array
// let array = new Array(100)
// console.log(array);
// console.log(array.length);

//^ Array static methods
//& 1. Array.from(str):converting a string to an array
// let data = "Javascripy"
// console.log(Array.from(data));

//! using number
// let data = "12345"
// console.log(Array.from(data));

//! using boolean
// let data1 = "true"
// console.log(Array.from(data1));

 //! synatx 
//  Array.from(ArrayRef,function)

 //! another method iterate array
//  let data = [1,2,3,4,5]
//  console.log(Array.from(data,(num)=>num*5));


//! convert a javscript a string data to an array after each charcter  num 0
// let data = "javaScript"
// console.log(Array.from(data,(str)=>str+0).toString().replaceAll(",",""));

//& 2.Array.isArray
// let data = [1,2,3,4,54,5]
// if (Array.isArray(data)){
//     console.log("Data recived in the form of Array");
// }
// else{
//     console.log("Data not recived in the fomr of Array");
      
// }

//&3 Array.of() : 
//*difftece between array and consctructor con i single iteam consider as lenghth but array of consider single item it self
console.log(Array.of(1,2,3,4,4,4));
console.log(Array.of(10));




 







