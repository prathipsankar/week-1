'use strict';
// 1 --> add all the elements of an array

const array = ['red','green','white','black'];
let finalStr = '';
for(let i=0;i<array.length;i+=1){
  if(i === (array.length)-1){
    finalStr += array[i];
  }else{
    finalStr = finalStr + array[i] + ',';
  }
}

console.log(`Answer for problem 1 is ---->> ${finalStr}`);

//2 --> Write a JavaScript function to find the difference between two arrays.


const difference = function(arr1,arr2){
  let uniqueArray = [];
  uniqueArray = uniqueArray.concat(comparingArray(arr1,arr2));
  uniqueArray = uniqueArray.concat(comparingArray(arr2,arr1));
  return uniqueArray;
}

const comparingArray = function(arr1,arr2){
  let originalArray = [];
  for(let i=0;i<arr1.length;i++){
    let count = 0;
    for(let j=0;j<arr1.length;j++){
      if(arr1[i] === arr2[j]){
        count +=1;
      }
    }
    if(count === 0){
      originalArray.push(arr1[i]);
    }
  }
  return originalArray;
}

console.log(` \nAnswer for problem 2 is --->>> ${difference([1, 2, 3], [100, 2, 1, 10])}`)

// 3 --> Write a JavaScript function to create an array of arrays, ungrouping the elements in an array

const unzip = function(arr1){
  let finalArray = [];
  let strArr =[], numArr =[], booleanArr=[];
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j+=1){
      if(typeof(arr1[i][j]) === "string"){
        strArr.push(arr1[i][j]);
      }else if(typeof(arr1[i][j]) === "number"){
        numArr.push(arr1[i][j]);
      }else if(typeof(arr1[i][j]) === "boolean"){
        booleanArr.push(arr1[i][j]);
      }
    }
  }
  finalArray.push(strArr,numArr,booleanArr);
  console.log(`\nAnswer for problem 3 is ---->> ${finalArray}`);
}

unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])

// 4 -->> Write a JavaScript program to find the most frequent item in an array.


const frequentItem = function(arr){
  let repeatedNumber = 0;
  let repeatedCount = 0;
  for(let i=0;i<arr.length-1;i++){
    let count = 1;
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] === arr[j]){
        count +=1;
      }
    }
    if(repeatedCount === 0){
      repeatedCount = count;
      repeatedNumber = arr[i];
    }else if(count > repeatedCount){
      repeatedCount = count;
      repeatedNumber = arr[i];
    }
  }
  return `${repeatedNumber} (${repeatedCount}times)`
}

console.log(`Answer for prob 4 ---> ${frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])}`)

// 5 --->> Write a JavaScript program to find all the unique values in a set of numbers.
const uniqueValue = function(arr){
  let finalArr = [];
  for(let i=0;i<arr.length;i++){
    let count = 0;
    let flag = false;
    for(let j=0;j<finalArr.length;j++){
      if(arr[i] === finalArr[j]){
        flag = true;
        count +=1;
      }
    }
    if(count === 0 && flag === false){
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

console.log(`\nAnswer for problem 5 is --->>> ${uniqueValue([1, 2, 2, 3, 4, 4, 5])}`)
console.log(`\nAnswer for problem 5 is --->>> ${uniqueValue([1, 2, 3, 4, 5])}`)
console.log(`\nAnswer for problem 5 is --->>> ${uniqueValue([1, -2, -2, 3, 4, -5, -6, -5])}`)

// 6. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes
class cyclinder{
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  }
  volume(){
    return Math.PI * this.radius ** 2 * this.height;
  }
}
let cyclinder1 = new cyclinder(5,15);
console.log(`\nAnswer for problem 6 is -->> ${cyclinder1.volume().toFixed(4)}`);

// 7.Write a JavaScript program to get the length of a JavaScript object.
let objLength = 0;
let obj = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
}
console.log(obj);
for(let key in obj){
  if(obj.hasOwnProperty(key)){
    objLength += 1;
  }
}
console.log(`Answer for problem 7 is ---> ${objLength}`)

// 8. Write a bubble sort algorithm in JavaScript.
const bubbleAlgorithm = function(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] > arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(`Answer for problem 8 is -->> ${bubbleAlgorithm([6,4,0, 3,-2,1])}`);


// 9. Write a JavaScript program to create a clock.

const clock = function(){
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  let time = '';
  let noon = (hour > 12) ? 'PM' : 'AM';
  hour = (hour > 12) ? (hour - 12) : hour ;
  hour = (hour < 10) ? ("0" + hour) : hour;
  min = (min < 10) ? ("0" +min) : min;
  seconds = (seconds < 10) ? ("0" + seconds) : seconds;
  time = hour + ':' + min + ':' + seconds + ' ' + noon;
  console.log(time);
  
}
setInterval(clock, 1000);

// 10. Write a JavaScript function to print all the methods in a JavaScript object.

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
  }
  
  console.log(`Answer for problem 10 is -->> ${FindAllMethods(Math)}`);
  console.log(`Answer for problem 10 is -->> ${FindAllMethods(Array)}`);