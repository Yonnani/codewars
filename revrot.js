function revrot(str, sz) {
    if (sz <= 0 || !str) {
        return '';
    }
    if (str.length < sz) {
        return '';
    }

    let idx = 0;
    let returnStr = '';
    while(idx + sz <= str.length) {
        const targetStr = str.substr(idx, sz);
        let strValArr = targetStr.split('').map(ele => parseInt(ele));
        let sum = 0;
        strValArr.forEach(ele => sum += ele);
        if (sum % 2 === 0) {
            strValArr.reverse();
        } else {
            const firstVal = strValArr[0];
            strValArr.shift();
            strValArr.push(firstVal);
        }

        returnStr += strValArr.join('');
        idx += sz;
    }

    return returnStr;
}