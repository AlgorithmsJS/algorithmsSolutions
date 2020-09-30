const arrayChunk = require('./index');

test('should be defined', () => {
    expect(arrayChunk).toBeDefined();
});

test('should return chunked by 2', () => {
    expect(arrayChunk([1, 2, 4, 5, 6], 2)).toEqual([
        [1, 2],
        [4, 5],
        [6]
    ])
});
test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = arrayChunk(arr, 2);

    expect(chunked).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10]
    ]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = arrayChunk(arr, 1);

    expect(chunked).toEqual([
        [1],
        [2],
        [3]
    ]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = arrayChunk(arr, 3);

    expect(chunked).toEqual([
        [1, 2, 3],
        [4, 5]
    ]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = arrayChunk(arr, 5);

    expect(chunked).toEqual([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13]
    ]);
});