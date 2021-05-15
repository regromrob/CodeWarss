// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  
    //   p// always be an array, always number, will it alwats be whole number, positive, !empty array
    //   r// return array of numbers, no dup
    //   e// [,2,2,3,4] ... [1,2,3,4]
    //   p//I'm gunna take a range of number given, and im look thru to see if dup values, remove dups and return only range
      return [...new Set(a)]
      
      
    }