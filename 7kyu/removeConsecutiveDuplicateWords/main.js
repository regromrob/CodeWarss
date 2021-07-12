// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


const removeConsecutiveDuplicates = s =>{
    let arr =s.split(' ')
      let finalStr = ''
        for ( let i = 0; i < arr.length; i++) {
             let elem = arr[i]
             if ( elem !== arr[i+1]){
               finalStr += elem + ' '
             } 
           // check every element next to one and we will see how it works
            
        }
           return finalStr.trim('') // we have an extra space in the end and we need to remove it 
    }


    ///better

    const removeConsecutiveDuplicates = s => s.split(' ').filter((word, index, array) => word !== array[index-1]).join(' ')
