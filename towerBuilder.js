function towerBuilder(nFloors) {
    var returnArr = [];
    var spaceCnt = nFloors - 1;
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