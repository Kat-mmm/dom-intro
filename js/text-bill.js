// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const billType = document.querySelector(".billTypeText");
const addBtn =  document.querySelector(".addToBillBtn");
let callTotalEl = document.querySelector(".callTotalOne");
let smsTotalEl = document.querySelector(".smsTotalOne");
let total = document.querySelector(".totalOne");

let callsTotal = 0;
let smsTotals = 0;
let billTotal = 0;

function textBillTotal(){
    let billVal = billType.value.toLowerCase().trim()
    
    if(billVal === 'sms'){
        smsTotals += 0.75;
    }
    else if(billVal === 'call'){
        callsTotal += 2.75;
    }

    callTotalEl.innerHTML = callsTotal.toFixed(2);
    smsTotalEl.innerHTML = smsTotals.toFixed(2);

    billTotal = callsTotal + smsTotals;
    total.innerHTML = billTotal.toFixed(2);

    if(billTotal >= 50){
        total.classList.add("danger");
    }
    else if(billTotal >=30){
        total.classList.add("warning");
    }
}



addBtn.addEventListener('click', textBillTotal)
