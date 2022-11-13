function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    // Decrement i after each iteration with i = num - 1
    for (let i = num - 1; i >= 1; i--) {
        // Multiply num by i and store the value of num at each iteration
        num *= i;
    }
    return num;
  }
  
  console.log(factorialize(5));