function tickets(peopleInLine){
    let vasaya100 = 0;
    let vasaya50 = 0;
    let vasaya25 = 0;
  
    const result = 
        peopleInLine.every(cash => {
            let thisResult = true;
            if (cash === 25) {
                vasaya25++; 
            } else if (cash === 50) {
                vasaya50++;
                if (vasaya25 > 0) {
                    vasaya25--;
                } else {
                    thisResult = false;
                }
            } else {
                vasaya100++;
                if (vasaya50 > 0 && vasaya25 > 0) {
                    vasaya50--;
                    vasaya25--;
                } else {
                    thisResult = false;
                }
            }
  
            return thisResult;
        });
  
    return result ? "YES" : "NO";
  }