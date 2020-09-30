function arrayChunk(arr, chunkLength) {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
        chunked.push(arr.slice(index, index + chunkLength));
        index += chunkLength;
    }
    return chunked;
}

module.exports = arrayChunk;