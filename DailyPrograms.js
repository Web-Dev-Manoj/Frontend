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