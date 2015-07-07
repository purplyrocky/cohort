//Prompt the user for a starting number
//Prompt the user for an ending number
//Parse the start and stop points into numbers and store them in variables you can use later
//These numbers will become the start and end points for our loop. If either number is not a number, alert to the user that only numbers can be entered. (no further action should take place, if / else will be handy here)
//Ensure that the start number is smaller than the stop number, otherwise stop execution (if / else)
//Create a loop (for or while, you choose) that will loop starting at the starting number, and end on the ending number.
//For each loop, log to the console if the number is even or odd (remember our % operator

var num1 = prompt('enter a starting number'),
    parsed1 = parseInt(num1),
    num2 = prompt('enter an ending number'),
    parsed2 = parseInt(num2);

if(isNaN(parsed1) || isNaN(parsed2)){
  alert('you did not enter a number');
} else if(parsed1 > parsed2){
  alert('enter a larger number the second time');
} else {
  for(i = parsed1; i < parsed2; i++){
      if(i % 2 === 0){
        console.log(i + ' is even');
      } else {
        console.log(i + ' is odd');
      }
    }
}