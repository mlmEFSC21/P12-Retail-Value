let productNo = null;
let dailyQuantitySold = 0;
let dailyTotalValue,
    weeklyTotalValue = 0;
let price = 0.0;
let dailyProductValue = [];
let sentinel = null;

function calculateDailyProductValue(productNo, dailyQuantitySold) {
    switch (productNo) {
        case 1:
            price = 2.98;
            dailyProductValue[0] = price * dailyQuantitySold;
            break;
        case 2:
            price = 4.5;
            dailyProductValue[1] = price * dailyQuantitySold;
            break;
        case 3:
            price = 9.98;
            dailyProductValue[2] = price * dailyQuantitySold;
            break;
        case 4:
            price = 4.49;
            dailyProductValue[3] = price * dailyQuantitySold;
            break;
        case 5:
            price = 6.87;
            dailyProductValue[4] = price * dailyQuantitySold;
            break;
        default:
            price = 0.0;
            break;
    }
}

function calculateDailyTotalValue(dailyProductValue) {
    dailyTotalValue = dailyProductValue.reduce(function (a, b) {
        return a + b;
    });
}

// function getDayOfWeek() {
//     const date = new Date();
//     let dayOfWeek = date.getDay();
//     console.log(dayOfWeek);
// }

function populateTable() {
    switch (new Date().getDay()) {
        case 0:
            let day = "sunday";
            let prod1 = document.querySelector("#sundayProd1");
            let monTotal = document.querySelector("#sunday");
        case 1:
            let day = "monday";
            let prod1 = document.querySelector("#mondayProd1");
        case 2:
            let day = "tuesday";
            let prod1 = document.querySelector("#tuesdayProd1");
        case 3:
            let day = "wednesday";
            let prod1 = document.querySelector("#wednesdayProd1");
        case 4:
            let day = "thursday";
            let prod1 = document.querySelector("#thursProd1");
        case 5:
            let day = "friday";
            let prod1 = document.querySelector("#fridayProd1");
        case 6:
            let day = "saturday";
            let prod1 = document.querySelector("#saturdayProd1");
    }
}

while (sentinel !== "Q") {
    getDayOfWeek();
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
