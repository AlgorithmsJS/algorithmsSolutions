const reverse = require('./index');

test('Reserve to be defined', () => {
    expect(reverse).toBeDefined();
});

test('string to be reversed', () => {
    expect(reverse('abs')).toEqual('sba');
})