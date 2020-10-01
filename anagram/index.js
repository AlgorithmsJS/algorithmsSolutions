function anagram(firstString, secondString) {
    firstString = [...firstString.replace(/[^\w]/g, '').toLowerCase()].sort().join('');
    secondString = [...secondString.replace(/[^\w]/g, '').toLowerCase()].sort().join('');

    return firstString === secondString;

}

module.exports = anagram;