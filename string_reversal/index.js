// function reverse(str){
//     return [ ...str].reverse().join('');
// }

function reverse(str) {
    return [...str].reduce((reserved, char) => char + reserved, '');
}

module.exports = reverse;