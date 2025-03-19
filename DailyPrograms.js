// 1. Write a program to check if a number is even or odd
const EvenOrOdd = number => {
    if (number % 2 === 0)
        return 'Even';
    else
        return 'Odd';
}
console.log(EvenOrOdd(32));

// 2. Write a program to check if a string is a palindrome.
const checkPalindrome = function (str) {
    let temp = str.split('').reverse().join('');
    return str === temp ? 'Palindrome' : 'Not a palindrome';
}
console.log(checkPalindrome('helloolleh'));

// 3. Write a program to find the largest number in an array.
const largestArrayNumber = function (arr) {
    return Math.max(...arr);
}
console.log(largestArrayNumber([1, 2, 56, 4, 55, 6, 7]))

// 4. Write a program to count the number of vowels in a string.
const countVowels = (str) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const item of str.split('').values()) {
        if (vowels.includes(item.toLowerCase()))
            count++;
    }
    return count;
}
console.log(countVowels('Manoj Bhargav'))

// 5. Write a program to reverse a string without using built-in functions.
const reverseStr = str => {
    // without builtin
    let temp = '';
    for (const item of str) {
        temp = item + temp;
    }
    return temp;
}
console.log(reverseStr('Saikumar'))

// 6. Write a program to find the factorial of a number.
function findFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(findFactorial(4));

// 7. Write a program to find the Fibonacci sequence up to the nth term.
const findFibonacci = num => {
    let temp = [];
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        temp.push(n1);
    }
    return temp;
}
console.log(findFibonacci(10));

// 6. Write a program to check if a number is prime.
const checkPrime = num => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) count += 1;
    }
    return count === 2 ? true : false;
}
console.log(checkPrime(4));

// 7. Write a program to print the multiplication table of a given number.
const printTable = num => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
printTable(10);
