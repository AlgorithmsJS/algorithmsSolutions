function palindrome(str) {
    const reserved = [...str].reverse().join('');
    return reserved == str;
}

// function palindrome(str) {
//     [...str].every((val, index) => {
//         return val === str[str.length - index - 1];
//     })
// }

module.exports = palindrome;