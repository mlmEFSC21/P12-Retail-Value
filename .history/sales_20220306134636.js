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
    dailyTotalValue = dailyTotalValue.toFixed(2);
}

function populateTable() {
    let day = "";
    let prod1 = null;
    switch (new Date().getDay()) {
        case 0:
            day = "sunday";
            prod1 = document.querySelector("#sundayProd1");
            prod2 = document.querySelector("#sundayProd2");
            prod3 = document.querySelector("#sundayProd3");
            prod4 = document.querySelector("#sundayProd4");
            prod5 = document.querySelector("#sundayProd5");
            monTotal = document.querySelector("#sunday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue}`;
            console.log(day);
            break;
        case 1:
            day = "monday";
            prod1 = document.querySelector("#mondayProd1");
            break;
        case 2:
            day = "tuesday";
            prod1 = document.querySelector("#tuesdayProd1");
            break;
        case 3:
            day = "wednesday";
            prod1 = document.querySelector("#wednesdayProd1");
            break;
        case 4:
            day = "thursday";
            prod1 = document.querySelector("#thursProd1");
            break;
        case 5:
            day = "friday";
            prod1 = document.querySelector("#fridayProd1");
            break;
        case 6:
            day = "saturday";
            prod1 = document.querySelector("#saturdayProd1");
            break;
        default:
            break;
    }
}

while (sentinel !== "Q") {
    productNo = parseInt(prompt("Enter the product number"));
    dailyQuantitySold = parseInt(prompt(`How many of ${productNo} were sold?`));
    calculateDailyProductValue(productNo, dailyQuantitySold);
    calculateDailyTotalValue(dailyProductValue);
    populateTable();
    sentinel = prompt("Any key to add another product or Q to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
console.log(dailyProductValue);
console.log(dailyTotalValue);
console.log(weeklyTotalValue);
