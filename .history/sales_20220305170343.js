let productNo = null;
let dailyQuantitySold = 0;
let price = null;
let dailyProductValue = 0;
let dailyTotalValue = 0;
let weeklyTotalValue = 0;

while (sentinel !== "Q") {
    productNo = parseInt(prompt("Enter the product number"));
    dailyQuantitySold = parseInt(prompt(`How many of ${productNo} were sold?`));
    getPrice(productNo);
    calculateDailyProductValue(price, dailyQuantitySold);
    calculateDailyTotalValue(dailyProductValue);

    sentinel = prompt("Click OK to add another product or Q to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
console.log(price);
console.log(dailyProductValue);
console.log(dailyTotalValue);
console.log(weeklyTotalValue);
