const maxChars = require('./index');

test('should return d', () => {
    expect(maxChars('adddds')).toEqual('d');

});

test('Works with numbers in the string', () => {
    expect(maxChars('ab1c1d1e1f1g1')).toEqual('1');
});