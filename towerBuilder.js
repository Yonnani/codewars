function towerBuilder(nFloors) {
    var returnArr = [];
    var spaceCnt = nFloors - 1; //
    var blockCnt = 0;
    while(spaceCnt >= 0) {
        var ele = '';
        for (let i = 0; i < spaceCnt; i++) {
            ele += ' ';
        }
        for (let i = 0; i < blockCnt; i++) {
            ele += '*';
        }
        ele += '*';
        for (let i = 0; i < blockCnt; i++) {
            ele += '*';
        }
        for (let i = 0; i < spaceCnt; i++) {
            ele += ' ';
        }
        blockCnt++;
        spaceCnt--;
        returnArr.push(ele);
    }
    return returnArr;
}

/*
 * String.prototype.repeat()
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */

/*
 * Array.from()
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */