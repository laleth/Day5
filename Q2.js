//Q1)

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = inputArray.filter(num => num % 2 !== 0);

console.log("Odd numbers in the array:", oddNumbers);


//Q2)

const capsstr = ["hello world", "javascript is awesome", "title caps"];

const titleCapsArray = capsstr.map(str => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

console.log("Array with title caps strings:", titleCapsArray);

//Q3)

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbersArray.reduce((total, num) => total + num, 0);

console.log("Sum of numbers in the array:", sum);

//Q4)

const primearr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
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
};

const primeNumbers = primearr.filter(num => isPrime(num));

console.log("Prime numbers in the array:", primeNumbers);

//Q5)

const stringsArray = ['racecar', 'hello', 'level', 'world', 'deified', 'programming'];

const isPalindrome = str => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const palindromeStrings = stringsArray.filter(str => isPalindrome(str));

console.log("Palindromes in the array:", palindromeStrings);


