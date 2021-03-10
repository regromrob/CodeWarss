// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let myBMI = weight/(height**2)
      switch (true){
       case myBMI <= 18.5:
         return "Underweight" 
         break; 
       case myBMI <= 25.0:
         return "Normal"
         break;
       case myBMI <= 30.0:
         return "Overweight"
         break;
       default:
         return "Obese"
      }
   } 