function tickets(peopleInLine){
    const totalCash = {
        25: 0, 50: 0, 100: 0
    };
    const ticketPrice = 25;
  
    const result = 
        peopleInLine.every(cash => {
            let thisResult = true;
            
            const keys = Object.keys(totalCash);

            // cash 받기
            const thisKey = keys.filter(aKey => parseFloat(aKey) === cash)[0];
            totalCash[thisKey]++;

            let leftChange = cash - ticketPrice;
            // 거스름돈 주기
            if (leftChange > 0) {
                keys.sort((a, b) => parseFloat(b) - parseFloat(a));
                const changeCandidates = keys.filter(key => key < cash);

                changeCandidates.forEach(change => {
                    while(leftChange > 0 && totalCash[change] > 0) {
                        leftChange -= parseFloat(change);
                        totalCash[change]--;
                    }
                });
            }

            if (leftChange > 0) {
                thisResult = false;
            }
  
            return thisResult;
        });
  
    return result ? "YES" : "NO";
}