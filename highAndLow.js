function highAndLow(numbers){
    var numbers_arr = numbers.split(' ');
    var max_val = numbers_arr.reduce((acc, cur) => Math.max(acc, cur));
    var min_val = numbers_arr.reduce((acc, cur) => Math.min(acc, cur));
    return max_val + ' ' + min_val;
}

/*
 Array.prototype.reduce()
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */