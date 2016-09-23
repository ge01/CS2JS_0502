// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeBalance();
});

// Constant for the monthly interest rate
var INTEREST_RATE = 0.005;

// Global variables
var balance;      // The account balance
var months;       // The number of months
var count = 1;    // Loop counter, initialized with 1

function computeBalance(){
  // Get the starting balance
  balance = parseFloat(document.getElementById('balance').value);

  // Get the number of months
  months =  parseFloat(document.getElementById('months').value);

  // Validate data entered
  if (balance === null || balance === "" || isNaN(balance)) {
    // Display an error message for miles
    document.getElementById('outBalance').innerHTML = "Balance must be filled out!";
  }
  else if (months === null || months === "" || isNaN(months)) {
    // Display an error message for gallons
    document.getElementById('outBalance').innerHTML = "Months must be filled out!";
  }
  else {
    // The following loop calculates the ending balance
    while (count <= months) {
      // Add this month's interest to the balance
      balance = balance + (INTEREST_RATE * balance);

      // Display this month's ending balance.
      document.getElementById('outBalance').innerHTML = "The ending balance " +
      "for month " + count + " is $" +  balance.toFixed(2);
      console.log("The ending balance " +
      "for month " + count + " is $" +  balance.toFixed(2));

      // Add one to the loop counter.
      count = count + 1;
    }

    // Display the ending balance
    document.getElementById('outBalance').innerHTML = "$" +  balance.toFixed(2);
  }
}
