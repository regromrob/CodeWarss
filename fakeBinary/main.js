// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let myArray = x.split('').map(item => {
      if(item < 5) {
        return 0
      } else {
        return 1
      }
    })
    return myArray.join('')
  }