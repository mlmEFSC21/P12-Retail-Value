let productNo = null;
let dailyQuantitySold = null;
let price = null;
let dailyTotalValue = null;
let weeklyTotalValue = null;
let sentinel = null;

while (sentinel != "Q" || sentinel != null) {
    productNo = prompt("Enter the product number");
    dailyQuantitySold = prompt(`How many of ${productNo} were sold?`);
    sentinel = prompt("Any input to add another product or Q to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
