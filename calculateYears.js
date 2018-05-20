function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    
    while(principal < desired) {
      var income = (principal * interest) * (1 - tax);
      principal += income;
      years++;
    }
    
    return years;
}