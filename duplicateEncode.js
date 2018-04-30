function duplicateEncode(word){
    var word_uppercase = word.toUpperCase();
    var word_arr = word_uppercase.split('');
    var encoded_str =
        word_arr.map(ele => {
            var returnVal = "(";
            var firstIdx = word_arr.indexOf(ele);
            var lastIdx = word_arr.lastIndexOf(ele);
            if (firstIdx != lastIdx) {
                returnVal = ")";
            }
            return returnVal;
        }).join('');

    return encoded_str;
}
