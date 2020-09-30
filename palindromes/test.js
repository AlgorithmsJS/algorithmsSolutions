const palindrome = require('./index');

test('Palindrome should be defined', () => {
    expect(palindrome).toBeDefined();
});

test('should return false', () => {
    expect(palindrome('rest')).toBeFalsy();
});

test('should return true', () => {
    expect(palindrome('abba')).toBeTruthy();
});