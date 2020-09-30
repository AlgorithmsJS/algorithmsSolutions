function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log('fizzbuzz');
            }
            console.log('fizz');
        } else if (i % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzbuzz;