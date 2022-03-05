let productNo = null;
let dailyQuantitySold = null;
let price = null;
let dailyTotalValue = null;
let weeklyTotalValue = null;
let sentinel = null;

while (sentinel != 0 || sentinel != null) {
    productNo = parseInt(prompt("Enter the product number"));
    dailyQuantitySold = parseInt(prompt(`How many of ${productNo} were sold?`));
    sentinel = prompt("Click OK to add another product or 0 to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
