// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(c){
    let codey= c.split('')
      return codey.map(x=>x.charCodeAt(0)).reduce((acc,c)=>acc + c,0)
     }