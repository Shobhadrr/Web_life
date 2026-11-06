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

//* if u pass single item in array it consider as  it treated as length of the array (constructor)
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
// console.log(Array.of(1,2,3,4,4,4));
// console.log(Array.of(10));

//^ instace method

//&1 .push() and pop perform operation on end:  push add the element at the last
// let array = [1,2,3,4,5]
// array.push("somu");
// console.log(array);

//& 2.pop()
// let array = [1,2,3,4,5]
// array.pop()
// console.log(array);

//& shift and unshift() perform the opaertion an start
//&3. shift(): removes the element at the start
// let array = [1,2,3,4,5]
// array.shift();
// console.log(array);

//& 4. unshitf():add the element at the start
// let array = [1,2,3,4,5]
// array.unshift("hello");
// console.log(array);

//& 5. slice() :returns a shallow copy of portion of an array 

// let array = [10,20,30,40,50]
// console.log(array.slice(2));
// console.log(array.slice(2,5));
// console.log(array.slice(-2));
// console.log(array.slice(6,2));// gretaer than starting index empty
// console.log(array.slice(-6,-8));
// console.log(array.slice(-2,-3));

//& 6. splice():
// let array = [10, 20, 30, 40, 50]
// let DeletedData = array.splice(1,2,"hello","good","hii")// index,arguments,count in splice  we can no of eleements
// let DeletedData = array.splice(1,0,"somu","rani","raju")// extistng data also and addig data also there
// console.log("DeletedData"+DeletedData);
// console.log(array);

//& 7 concat(): merge two or more array and return the new array
//  let arr1 = [10]
//  let arr2 = [20]
// let c = arr1.concat(arr2)
// console.log(c);

//&8 .reverse(): reverse the array
// let arr = [10, 20, 30, 40, 50]
// console.log(arr.reverse());

//& 9.join(): it  convert the array into string by specified separator
// let arr = [10,20,30,40,50]
// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join("%"));

//& 10. indexof(): Return the  index of the first occurence of a specifed substring if not found return -1
// let arr = [10,20,30,40,30,50]
// console.log(arr.indexOf(30));//2

//& 11. lastIndexof():retrnen the index of the last occuence of a specied array
// let arr = [10,20,30,40,30,50]
// console.log(arr.lastIndexOf(30));//4

//& 12 . includes(): check if array includes spicfied element or not
// let arr = [1,2,3,4]
// console.log(arr.includes(2));// true
// console.log(arr.includes(5));// false

//&13. entries() :it return the object of key value pair by suing th e iterover for  it will give the neste0 darray
// which is uesd accec the key value -pair like index no and values
// let arr=[10,20,30,40,50]
// for (let x  of arr.entries()){
//     console.log(x);
    
// }
//&14 .keys(): it only display the key not  values  or to access the the key
// let arr=[10,20,30,40,50]
// for(let x of arr.keys()){
//     console.log(x);
    
// }
//&15.values(): it only display the values not a key
// let arr=[10,20,30,40,50]
// for(let x of arr.values()){
//     console.log(x);
    
// }

//&16.every()
// let arr1=[2,4,6]
// let data = ['red','white','green','undefined']
// // console.log(arr1.every((num)=>num%2 == 0));//true
// console.log(data.every((data)=>data === undefined));//false
// console.log(data.every((data)=>data !== undefined));//true

//& 17 some():method checks whther atleast  one elemnt in an array satisfies a given condition
// let arr =[1,2,3,4,5,6]
// console.log(arr.some((num)=>num>5));//true

// let arr =[1,2,3,4,5] you give like this it is false

//&18. fill():modify the original array only
// let array = [1,2,3,4,5]
// console.log(array.fill("somu",0,3)); // value,starting index ,ending index
// console.log(array);

//&19 find():it return first element in array that satisfies the given condition
// let array = [1,2,3,4,5]
// console.log(array.find((num)=>num>4));//5

//&20 findIndex(): the element which satisfies the condition that index will be given
// let array = [1,2,3,4,5,6,7,8]
// console.log(array.findIndex((num)=>num>6));//6

//&21. findLast():
// let array = [1,2,3,4,5,6,7]
// console.log(array.findLast((num)=>num>4));//7

//&22.findLastIndex()
// let array = [1,2,3,4,5,6]
// console.log(array.findLastIndex((num)=>num>4));//5 it give last value index no 

//&23. flat():this method is used to convert a nested array into a single-level array
// let data = [1,2,3,4,[10,20,[30,50]]] 
// console.log(data.flat(2));

// let data1 = [1,2,3,4,[10,20,[100,200,300]]]
// // console.log(data[4]);
// console.log(data.flat(Infinity));

//simple example
// let a=[1,2,[3,4],[5,6]];
// console.log(a.flat());//[ 1, 2, 3, 4, 5, 6 ]

//&24 .toReversed :
// let data=[1,2,3,4,5]
// console.log(data.reverse());
// console.log(data);
//output
// [ 5, 4, 3, 2, 1 ]
// [ 5, 4, 3, 2, 1 ]

// console.log(data.toReversed());
// console.log(data);
//output
// [ 5, 4, 3, 2, 1 ]
// [ 1, 2, 3, 4, 5 ]

//&25. tospliced
// let array=[1,2,3,4,5,6]
// console.log(array.toSpliced(2));//[ 1, 2 ]
// console.log(array);//[ 1, 2, 3, 4, 5, 6 ]

//&26.toString
// let array1=[1,2,3,4,5,6]
// console.log(array1.toString());
// console.log(array1);

//&27. sort()
// let data = [1,8,9,3,2]
//out [ 1, 2, 3, 8, 9 ]
// let colors = ["green","white","black","red"]
//out [ 'black', 'green', 'red', 'white' ]
// console.log(data.sort());
// console.log(colors.sort());

let data = [1,8,3,10,20]//[ 1, 10, 20, 3, 8 ]
// console.log(data.sort());
console.log(data.sort(function(a,b){
    return a-b
}))//[ 1, 3, 8, 10, 20 ]
// console.log(data.sort((a,b)=>a-b));//[ 1, 3, 8, 10, 20 ]
// console.log(data.sort((a,b)=>b-a));//[ 20, 10, 8, 3, 1 ]

//&28.toSorted()

let data1 = [1,8,3,10,20]
console.log(data1.toSorted());
console.log(data1.toSorted((a,b)=>a-b));
console.log(data1.sort(function(a,b){
    return a-b
}))

//& copymethod



































