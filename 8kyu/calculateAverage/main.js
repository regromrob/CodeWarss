// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0

function find_average(array) {
    // your code here
    return array.reduce((acc,c)=>acc+c,0)/array.length;
  }