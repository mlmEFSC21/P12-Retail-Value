let productNo = null;
let dailyQuantitySold = 0;
let price = 0.0;
let dailyTotalValue = 0.0;
let dailyProductValue = [0, 0, 0, 0, 0];
let sentinel = null;

function calculateDailyProductValue(productNo) {
    switch (productNo) {
        case 1:
            price = 2.98;
            // value1 = price * dailyQuantitySold;
            dailyProductValue[0] = price * dailyQuantitySold;
            break;
        case 2:
            price = 4.5;
            // value2 = price * dailyQuantitySold;
            dailyProductValue[1] = price * dailyQuantitySold;
            break;
        case 3:
            price = 9.98;
            // value3 = price * dailyQuantitySold;
            dailyProductValue[2] = price * dailyQuantitySold;
            break;
        case 4:
            price = 4.49;
            // value4 = price * dailyQuantitySold;
            dailyProductValue[3] = price * dailyQuantitySold;
            break;
        case 5:
            price = 6.87;
            // value5 = price * dailyQuantitySold;
            dailyProductValue[4] = price * dailyQuantitySold;
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
}

function populateTable() {
    switch (new Date().getDay()) {
        case 0:
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
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 1:
            prod1 = document.querySelector("#mondayProd1");
            prod2 = document.querySelector("#mondayProd2");
            prod3 = document.querySelector("#mondayProd3");
            prod4 = document.querySelector("#mondayProd4");
            prod5 = document.querySelector("#mondayProd5");
            monTotal = document.querySelector("#monday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 2:
            prod1 = document.querySelector("#tuesdayProd1");
            prod2 = document.querySelector("#tuesdayProd2");
            prod3 = document.querySelector("#tuesdayProd3");
            prod4 = document.querySelector("#tuesdayProd4");
            prod5 = document.querySelector("#tuesdayProd5");
            monTotal = document.querySelector("#tuesday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 3:
            prod1 = document.querySelector("#wednesdayProd1");
            prod2 = document.querySelector("#wednesdayProd2");
            prod3 = document.querySelector("#wednesdayProd3");
            prod4 = document.querySelector("#wednesdayProd4");
            prod5 = document.querySelector("#wednesdayProd5");
            monTotal = document.querySelector("#wednesday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 4:
            prod1 = document.querySelector("#thursdayProd1");
            prod2 = document.querySelector("#thursdayProd2");
            prod3 = document.querySelector("#thursdayProd3");
            prod4 = document.querySelector("#thursdayProd4");
            prod5 = document.querySelector("#thursdayProd5");
            monTotal = document.querySelector("#thursday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 5:
            prod1 = document.querySelector("#fridayProd1");
            prod2 = document.querySelector("#fridayProd2");
            prod3 = document.querySelector("#fridayProd3");
            prod4 = document.querySelector("#fridayProd4");
            prod5 = document.querySelector("#fridayProd5");
            monTotal = document.querySelector("#friday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        case 6:
            prod1 = document.querySelector("#saturdayProd1");
            prod2 = document.querySelector("#saturdayProd2");
            prod3 = document.querySelector("#saturdayProd3");
            prod4 = document.querySelector("#saturdayProd4");
            prod5 = document.querySelector("#saturdayProd5");
            monTotal = document.querySelector("#saturday");
            prod1.innerHTML = `$${dailyProductValue[0].toFixed(2)}`;
            prod2.innerHTML = `$${dailyProductValue[1].toFixed(2)}`;
            prod3.innerHTML = `$${dailyProductValue[2].toFixed(2)}`;
            prod4.innerHTML = `$${dailyProductValue[3].toFixed(2)}`;
            prod5.innerHTML = `$${dailyProductValue[4].toFixed(2)}`;
            monTotal.innerHTML = `$${dailyTotalValue.toFixed(2)}`;
            break;
        default:
            break;
    }
}

while (sentinel !== "Q") {
    productNo = parseInt(prompt("Enter the product number"));
    dailyQuantitySold = parseInt(prompt(`How many of ${productNo} were sold?`));
    calculateDailyProductValue(productNo);
    console.log(dailyProductValue[0]);
    console.log(dailyProductValue[1]);
    console.log(dailyProductValue[2]);
    console.log(dailyProductValue[3]);
    console.log(dailyProductValue[4]);
    calculateDailyTotalValue(dailyProductValue);
    populateTable();
    sentinel = prompt("Any key to add another product or Q to quit.");
}

console.log(productNo);
console.log(dailyQuantitySold);
console.log(dailyProductValue);
console.log(dailyTotalValue);
