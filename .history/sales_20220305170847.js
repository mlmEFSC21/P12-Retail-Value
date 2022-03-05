let productNo = null;
let dailyQuantitySold = 0;
let price = 0.0;
let dailyProductValue = 0;
let dailyTotalValue = 0;
let weeklyTotalValue = 0;

function getPrice(x) {
    switch (x) {
        case 1:
            price = 2.98;
            break;
        case 2:
            price = 4.5;
            break;
        case 3:
            price = 2.98;
            break;
        case 4:
            price = 2.98;
            break;
        case 5:
            price = 2.98;
            break;
        default:
            price = 0.0;
            break;
    }
}

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
