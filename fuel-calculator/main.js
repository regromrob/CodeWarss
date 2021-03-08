function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    if(litres>=10){
      return Number(((litres*pricePerLitre)-(litres*.25)).toFixed(2))
    }else if(litres>=8){
      return Number(((litres*pricePerLitre)-(litres*.20)).toFixed(2))
    }else if(litres>=6){
      return Number(((litres*pricePerLitre)-(litres*.15)).toFixed(2))
    }else if(litres >=4){
       return Number(((litres*pricePerLitre)-(litres*.10)).toFixed(2))
    }else if(litres >=2){  
     return Number(((litres*pricePerLitre)-(litres*.05)).toFixed(2))
    }
  }