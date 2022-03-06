let productNo = null;
let dailyQuantitySold = 0;
let price = 0.0;
let dailyProductValue = 0;
let dailyTotalValue = 0;
let weeklyTotalValue = 0;
let numOfDaysElapsed = 0;
let sentinel = null;

function calculateDailyProductValue(productNo, dailyQuantitySold) {
    switch (productNo) {
        case 1:
            price = 2.98;
            dailyProductValue = price * dailyQuantitySold;
            break;
        case 2:
            price = 4.5;
            dailyProductValue = price * dailyQuantitySold;
            break;
        case 3:
            price = 9.98;
            dailyProductValue = price * dailyQuantitySold;
            break;
        case 4:
            price = 4.49;
            dailyProductValue = price * dailyQuantitySold;
            break;
        case 5:
            price = 6.87;
            dailyProductValue = price * dailyQuantitySold;
            break;
        default:
            price = 0.0;
            break;
    }
}

function calculateDailyTotalValue(dailyRunningTotal) {
    dailyTotalValue += dailyRunningTotal;
}

while (sentinel !== "Q") {
    productNo = parseInt(prompt("Enter the product number"));
    dailyQuantitySold = parseInt(prompt(`How many of ${productNo} were sold?`));
    calculateDailyProductValue(productNo, dailyQuantitySold);
    calculateDailyTotalValue(dailyProductValue);
    sentinel = prompt("Any key to add another product or Q to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
console.log(dailyProductValue);
console.log(dailyTotalValue);
console.log(weeklyTotalValue);