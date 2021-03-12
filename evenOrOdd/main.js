
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function warnTheSheep(queue) {
    let reverseArr = queue.reverse()
    let number= reverseArr.indexOf('wolf')
  
  //   reverseArr.forEach((item,index)=>{
    for(let i = 0; i<=reverseArr.length; i++){
      if(reverseArr[i]==='wolf'){
        return 'Pls go away and stop eating my sheep' 
      }else{
        return `Oi! Sheep number ${number}! You are about to be eaten by a wolf!`
      }
      }
    }