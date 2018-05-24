var countBits = function(n) {
    const numOfBit = Number(n).toString(2);
    const arr = numOfBit.split('')
                .filter(ele => ele === '1');
    return arr.length;
};