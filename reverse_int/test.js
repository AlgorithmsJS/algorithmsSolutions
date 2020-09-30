const reverseInt = require('./index');

test('should be definde', () => {
    expect(reverseInt).toBeDefined();
});

test('should keep the sign', () => {
    expect(reverseInt(-15)).toBe(-51);
});

test('should remove zeros', () => {
    expect(reverseInt(-900)).toBe(-9);
});

test('should reverse int', () => {
    expect(reverseInt(986)).toBe(689);
});