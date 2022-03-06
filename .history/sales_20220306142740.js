let productNo = null;
let dailyQuantitySold = 0;
let price = 0.0;
let dailyProductValue = [0, 0, 0, 0, 0];
let sentinel = null;

function calculateDailyProductValue(productNo, dailyQuantitySold) {
    switch (productNo) {
        case 1:
            price = 2.98;
            value1 = price * dailyQuantitySold;
            dailyProductValue[0] = value1.toFixed(2);
            break;
        case 2:
            price = 4.5;
            value2 = price * dailyQuantitySold;
            dailyProductValue[1] = value2.toFixed(2);
            break;
        case 3:
            price = 9.98;
            value3 = price * dailyQuantitySold;
            dailyProductValue[2] = value3.toFixed(2);
            break;
        case 4:
            price = 4.49;
            value4 = price * dailyQuantitySold;
            dailyProductValue[3] = value4.toFixed(2);
            break;
        case 5:
            price = 6.87;
            value5 = price * dailyQuantitySold;
            dailyProductValue[4] = value5.toFixed(2);
            break;
        default:
            price = 0.0;
            break;
    }
}

function calculateDailyTotalValue(dailyProductValue) {
    dailyTotalValue = dailyProductValue.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
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
            prod1.innerHTML = `$${dailyProductValue[0]}`;
            prod2.innerHTML = `$${dailyProductValue[1]}`;
            prod3.innerHTML = `$${dailyProductValue[2]}`;
            prod4.innerHTML = `$${dailyProductValue[3]}`;
            prod5.innerHTML = `$${dailyProductValue[4]}`;
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
