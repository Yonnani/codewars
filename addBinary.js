function addBinary(a,b) {
    var sum = a + b;
    var returnArr = [];
    do {
        returnArr.push(sum%2);
        sum = Math.floor(sum/2);
    } while (sum > 2);
    returnArr.push(sum);

    return returnArr.reverse().join('');
}