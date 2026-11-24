//^ 1.map()
// let array=[1,2,3,4,5]

// function multiply(x){
//     return x*5
// }
// let newArray = array.map(multiply)
// console.log("New array" + newArray);
// console.log("Org array" + array);

//& map can using by  arraow function
// let newArray = array.map(x => x*5)
// console.log("New array" + newArray);
// console.log("Org array" + array);

//& using  map
// let array=[1,2,3,4,5]
// function multiply(x){
//     return x*5
// }
// array.map((item,index,orgarray)=>{
//     console.log(item,index,orgarray);
    
// })

// output
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]

//& qube of array using map

// let a1=[1,2,3,4,5]
// function qube(x){
//     return x**3
// }
// let newArray = a1.map(qube)
// console.log("New array" + newArray);
// console.log("Org array" + a1);

//&or
// let arr = [10,20,30,40,50]
// let result =arr.map((item,index,org)=>item)

//! filter(): same as it map condtion staistfies it will considered as output otherwise it ignored
// let data=[1,2,3,4,5,6,7,8]
// let newData = data.map((item)=>{
//     if(item%2==0) return item
// })
// console.log(newData);
//out
// [
//   undefined, 2,
//   undefined, 4,
//   undefined, 6,
//   undefined, 8
// ]


// let result = data.filter((item,index,org)=> item%2 ===0) //[ 2, 4, 6, 8 ]
// let result = data.filter((item,index,org)=> item%2)//[ 1, 3, 5, 7 ]
// console.log(result);

//& consider array 5 items which item lenth greater than 5

// let arr=["Anushree","Radhika","Rashika","Ramya"]
// let result = arr.filter((item,index,org)=>item.length>5)
// console.log(result);//[ 'Anushree', 'Radhika', 'Rashika' ]

//& display the output who names start with R
// let arr=["Anushree","Radhika","Rashika","Ramya","Shobha"]
// let result = arr.filter((item,index,org)=>item.startsWith('R'))
// console.log(result);

//& filter out empty string from the array
// let arr=["Anushree","Radhika","Rashika","",""]
// let result = arr.filter((item,index,org)=>item!=="")
// console.log(result);//[ 'Anushree', 'Radhika', 'Rashika' ]

//& name which consit of A
// let arr=["Shobha","Sheethal","somu","sonu"]
// let result = arr.filter((item,index,org)=>item.includes('a'))
// console.log(result);//[ 'Shobha', 'Shethal' ]

//& filter the number which consist 5 in there value
// let arr=[45,78,45,55,65,89,66]
// let result = arr.filter((item,index,org)=>item.toString().includes("5"))
// console.log(result);//[ 45, 45, 55, 65 ]


//! reduce()
// let data = [1,2,3,4,5,6,7,8,9,10]

// let sum=0
// for(let i=0; i<data.length; i++){
//     sum=sum+data[i]
// }

// console.log(sum);//55

// let result = data.reduce((sum,currnum)=> sum + currnum)//55
// let result = data.reduce((acc,curv)=> acc * curv,0)//0


// let result = data.reduce(()=>{
    
// },intialvalue)
// console.log(result);

// let newdata = data.reduce((acc,x)=>{
//     return acc+x
// },100)
// console.log(newdata);//155

//& find out the sum of  all the even number of arrays

let data=[1,2,3,4,5]
console.log(data.filter(item => item%2==0).reduce((acc,cur)=>acc+cur)) //6






