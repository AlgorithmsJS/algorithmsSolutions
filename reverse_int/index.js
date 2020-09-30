function reverseInt(num) {
    return Math.sign(num) * parseInt([...num.toString()].reverse().join(''));
}

module.exports = reverseInt;