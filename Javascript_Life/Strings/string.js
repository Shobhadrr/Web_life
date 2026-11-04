//! using single coat
// let name = 'shobha'
// console.log(name);
// console.log(typeof name);

//! using double coat
// let name = "shobha"
// console.log(name);
// console.log(typeof name);

//! using backtick
// let name = `Rani`
// console.log(name)
// console.log(typeof name);

//! interpolation
// let name = "somu"
// let age = 20
// console.log(`My Name is ${name} and my Age is ${age}`);

//! 1.concating the string
// let first_name =  "Bhagya"
// let last_name =  "Shobha"
// console.log(first_name);

// console.log(" My first_name is " + first_name + " and my last name is " + last_name);
// console.log("My full name is " + (first_name+last_name));

//! By Template
//! 2.${} --String interpolation
// console.log(`My first_name is ${first_name} and my last_name is ${last_name}`);
// console.log(`My full name is ${first_name+last_name} `);

//! 3.using string object
// let str=new String("Javascript")
// console.log(str)
// console.log(typeof str);

//^method and fun calling statement both are same

//! string using  length: it is always count start from 1 and index will start from 0
// let data = "Ramya"
// console.log(data.length);
// console.log(data[0]);
// console.log(data[data.length-1])


//^ static methods 
// //! 1. String.fromCharCode

// let str=String.fromCharCode(83,104,111,98,104,97)
// console.log(str);

//! 2. String.fromCodePoint
// let str = String.fromCodePoint(128536)
// console.log(str);

//! 3.raw; what you exaxt content will be displayed
// let str = String.raw`hello\n"@.....56787oihoihh`
// console.log(str);

//^ instance methods of string

//* 1. at() returns char at a specified position
// let str = "Javascript"
// console.log(str.at(0));
// console.log(str.at(-1));

//* 1.charAt() returns chaactorr at a specified index and only allow the positive index
// let str1 = "Javascript"
// console.log(str1.charAt(0));
// console.log(str1.charAt(-1));

//* 3.charCodeAt(): return the unicode(Ascii) value of the char at a specified  index
// let str = "Javascript"
// console.log(str.charCodeAt(1));

//*4.concate() concatenates comibne two more strings
// let str1 = "Java"
// let str2 = "Script"
// let newStr = str1.concat(" ",str2," Hello ","Good morning")
// console.log(newStr);

//*5.includes() checks if a string conatins a specified substring
// let str = "Javascript is wonderful language "
// console.log(str.includes('is'));
// console.log(str.includes('good'));
// console.log(str.includes('wonderful',14));

//* 6.indexOf() : returns the first occuence of output
// let str = "Javascript is wonderful language "
// console.log(str.indexOf("a",5));

//* 7.lastIndexOf():
// let data = "somu rajo"
// console.log(data.lastIndexOf("m"));// if any char is not found then it will give -1

//* 8.split():split a string into an array based on specified separator
// let str= "Javascript is Wonderful language"
// console.log(str.split(" "));//^when yu separator meanns " " the it will separte single item array
// console.log(str.split(""));//^ it split all strings
// console.log(str.split("i"));//^ it will spilit charter which character we can theat also remover it split  [ 'Javascr', 'pt ', 's Wonderful language' ]
// console.log(str.split("",4));//^  it will split based specied no[ 'J', 'a', 'v', 'a' ]

//* 9. toUpperCase():Convert the string to uppperCase
// let str = "Javascript is Wonderful language"
// console.log(str.toLowerCase());

//*12 . trim(): it will avoid the space
// let str = "    Javascript is Wonderful language     "
// console.log(str.length)
// console.log(str.trim());
// console.log(str.trim().length);
// // console.log(str);

//* 13.trimStart():
// let str = "   Good  Morning everyone   "
// console.log(str.trimStart());

//* 14.trimEnd():
// let str = "   Good  Morning everyone   "
// console.log(str.trimEnd());

//* 15.startsWith():it will check str is start with particulat string or not
// let link = "https://www.google.com"
// console.log(link.startsWith("https"));// true
// console.log(link.startsWith("www"));//false

//*16. endWith():it will check str is end with particulat string or not
// let Data = "images.jpg"
// console.log(Data.endsWith("jpg"));//true
// console.log(Data.endsWith("images"));//false

//*18 repeat():it will reapte the string
// let Data ="ramu "
// console.log(Data.repeat(4));

//*19 padString:
// let Data = "ramu"
// console.log(Data.padStart(10,'o'));

//*20 padEnd:
// let Data = "ramu"
// console.log(Data.padEnd(15,'o'));

//* 21 replace:
// let Data="ramu ramu"
// console.log(Data.replace("ra",'so'));

//*22 replaceAll():
// let Data="ramu ramu ramu"
// console.log(Data.replaceAll("ra",'so'));

//* 23. toString()
// let data = new String("hello")
// console.log(data);
// console.log(typeof data);
// console.log(typeof data.toString());

//! 24.slice() and Substring
// let str = "Java script is Wonderful language "
// console.log(str.slice(4));
// console.log(str.slice(4,20));
// console.log(str.slice(39,11));
// console.log(str.slice(-32,-15));
// console.log(str.slice(-45));
// console.log(str.slice(-15,-27));  //*emptty string


// ! substring
// console.log(str.substring(5));
// console.log(str.substring(10,28));
// console.log(str.substring(-5));
// console.log(str.substring(22,10));
// console.log(str.substring(-15,-27)); //*empty string
// console.log(str.substring(-11,3));  //*Jav
// console.log(str.substring(11,-3));   //* it consider the positive index only Java script

//! slice
// let data = "Javascript is wonderful language"
// let count=0
//! 1 count the letters in the given string without using length method
// for(let i=0; i<data.length; i++){
//     count++
// }
// console.log(count);

//! 2.without using 
// for(let i in data){
//     count++
// }
// console.log(count);

//!3. without method
// let data = "Javascript is wonderful language"
// let count =0
// for(let i in data){
//     if("aeiou".includes(data[i]))
//         count++
// }
// console.log(count);

//!4. with method
// let data = "Javascript is wonderful language";

// function countVowels(str) {
//     let count = 0;
//     for (let i in str) {
//         if ("aeiou".includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(data));

//! 5. fisrt letter only capital
// let data = "javascript is wonderful language";
// console.log(data.charAt(0).toUpperCase()+data.slice(1));

//!6. space remove given string
let Data="Javascript is wonderful language"
console.log(Data.replaceAll(" ",'').trim());



































































