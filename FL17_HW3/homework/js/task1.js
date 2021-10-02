// Your code goes here
do {
    var initialAmount = +prompt("Enter your initial amount of money.");
    if (isNaN(initialAmount) || (initialAmount < 1000)) {
        alert('Invalid input data');
    }
} while (isNaN(initialAmount) || (initialAmount < 1000));

do {
    var years = +prompt("Enter number of years. More than 1.");
    if ((isNaN(years) || (years < 1))) {
        alert('Invalid input data');
    }
} while (isNaN(years) || (years < 1));

do {
    var percentage = +prompt("Enter number of percentage. Less than 100.");
    if ((isNaN(percentage) || (percentage > 100))) {
        alert('Invalid input data');
    }
} while (isNaN(percentage) || (percentage > 100));

var total = initialAmount * Math.pow(1 + percentage / 100, years);

alert('Initial amount: ' + initialAmount +
    '\nNumber of years: ' + years +
    '\nPercentege of year:' + percentage +
    '\n' + '\n' + 'Total amount: ' + total);