function maxChars(str) {
    let chars = {};
    let max = 0;
    let maxChar = '';

    for (char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    for (char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChars;