//Create a Bank constructor function
//The constructor function should have a balance property equal to 100
//Add a credit function to Banks prototype that will add to balance
//Add a debit function to the Banks prototype that will subtract from the balance
//Create an instance of the bank
//Create a loop that will run three times and prompt the user for a number input
//Parse the values into numbers
//Call the bank.credit(num) function and add that amount to your balance
//Create a new loop that will run twice
//Inside this loop prompt for a number and parse the number
//Run these two numbers with the bank.debit(num) to subtract from the balance
//Finally, log the ending balance after the three credits and two debits. For instance, if you start with 100, credit 10 three times, we get 130, then debit 10 twice, we get 110.
/*global prompt*/
//nonprotect

//constructor function with initial balance of 100
function Bank(balance) {
  this.balance = balance || 100;
}

Bank.prototype = {
  //credit function that will add balance
  credit: function credit(amount) {
  this.balance += amount;
  },
  //debit function that will subtract from the balance
  debit: function debit(amount) {
  this.balance -= amount;
  }
};


//create an instance of a bank
var CHASE = new Bank();

//create a loop to prompt 3 times for a num
//parse into numbers
for(var i = 0; i < 3; i++){
  var amount = parseInt(prompt('How much to deposit?'), 10);
  
  if(isNaN(amount)){
    continue;
  }
  //call the Bank.credit(num) to add that amount to the balance
  CHASE.credit(amount);
}

//new loop to prompt 2 times for a number
//parse into numbers
for(var i = 0; i < 2; i++){
  var amount = parseInt(prompt('How much to withdrawl?'), 10);
  
  if(isNaN(amount)){
    continue;
  }
  //call the debit function and subtract from the balance
  CHASE.debit(amount);
}

console.log(CHASE.balance);