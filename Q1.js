//Q1)
const arr = [2,3,22,33,40];

console.log("Anonymous function");
var odd = function(arr){

    for(let index in arr){
        if(arr[index]%2!==0){
            console.log(arr[index])
        }
    }

}
odd(arr);

console.log("IIFE function");

(function(arr){

    for(let index in arr){
        if(arr[index]%2!==0){
            console.log(arr[index])
        }
    }

})(arr);

//Q2)

const str = ['laleth','gowtham','naveen','praveen'];

console.log("Anonymous function");

const caps = function(str){

    for(let index in str){
        console.log(str[index].charAt(0).toUpperCase()+ str[index].slice(1).toLowerCase());
        //console.log(str[index]);
    }
}
caps(str);

console.log("IIFE function");

(function(str){

    for(let index in str){
        console.log(str[index].charAt(0).toUpperCase()+ str[index].slice(1).toLowerCase());
        //console.log(str[index]);
    }
})(str);

//Q3)

const newarray1 = ['5','3','22','54','43'];

const newarr = newarray1.map(item => parseInt(item));

console.log("Anonymous function");

const newarray2 = function(newarr){
    let sum = 0;
    for(let index in newarr){
        sum = sum + newarr[index];
    }

    console.log(sum);
}

newarray2(newarr);

console.log("IIFE function");

(function(newarr){
    let sum = 0;
    for(let index in newarr){
        sum = sum + newarr[index];
    }

    console.log(sum);
})(newarr);

//Q4)

console.log("Anonymous function");

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbersArray = inputArray.filter(function(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
});

console.log("Prime numbers in the array:", primeNumbersArray);

console.log("IIFE function");

const primearr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findprimearr = (function(arr) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  return arr.filter(isPrime);
})(primearr);

console.log("Prime numbers in the array:", findprimearr);

//Q5)

const newstr = ['racecar', 'hello', 'level', 'world', 'deified', 'programming'];

const palindromesArray = (function(arr) {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  return arr.filter(isPalindrome);
})(newstr);

console.log("Palindromes in the array:", palindromesArray);

//Q6)

const mer1 = [1, 3, 5];
const mer2 = [2, 4, 6];

const median = (function(arr1, arr2) {
  const merged = arr1.concat(arr2).sort((a, b) => a - b);
  const midIndex = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[midIndex - 1] + merged[midIndex]) / 2;
  } else {
    return merged[midIndex];
  }
})(mer1, mer2);

console.log("Median of the arrays:", median);

//Q7)

const duplicatearr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

const uniqueArray = (function(arr) {
  const uniqueValues = [];
  
  arr.forEach(function(item) {
    if (!uniqueValues.includes(item)) {
      uniqueValues.push(item);
    }
  });
  
  return uniqueValues;
})(duplicatearr);

console.log("Array with duplicates removed:", uniqueArray);

//Q7)

const rotatearr = [1, 2, 3, 4, 5];
const k = 2; 

const rotatedArray = (function(arr, rotations) {
  const len = arr.length;
  const rotated = [...arr];

  for (let i = 0; i < rotations; i++) {
    const temp = rotated.shift();
    rotated.push(temp);
  }

  return rotated;
})(rotatearr, k);

console.log(`Array rotated by ${k} times:`, rotatedArray);


