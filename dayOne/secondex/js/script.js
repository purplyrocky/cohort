//Prompt for a number value (provide a default of 10)
//Prompt for another number value (provide a default of 10)
//Convert the promped values into integers.
//Make sure that the input from steps 1 and 2 are numbers.
//If they are numbers, add the numbers together and log the value to the console.
//If either of the prompted values are not numbers, alert someting to the user that they must input nubmers only.

var num1 = prompt('enter a number'),
    parsed1 = parseInt(num1, 10),
    num2 = prompt('enter another number'),
    parsed2 = parseInt(num2, 10),
    answer = parsed1 + parsed2;

    if(!isNaN(parsed1) && !isNaN(parsed2)){
      console.log(answer);
    } else {
      alert('you did not enter a number');
    }