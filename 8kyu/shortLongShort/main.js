// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

function solution(a, b){
    let alength = a.length
    let blength = b.length
    let newStr =''
    
    if(alength>blength){
    return newStr += `${b}${a}${b}`
    }else{
      return newStr += `${a}${b}${a}`
    }
    
  }
  