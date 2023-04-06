//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

const calculateBtn = document.querySelector(".calculateBtn");
let billTotalEl = document.querySelector(".billTotal");
let billStringEl = document.querySelector(".billString");

function totalPhoneBill(log){
    log.replace(/\s+/g, '');
    console.log(log)
    var allLogs = log.toLowerCase().split(',');

    var bill = 0;
    for(var i=0; i<allLogs.length; i++){
        if(allLogs[i] === 'call'){
        bill += 2.75;
        }
        else if(allLogs[i] === 'sms'){
        bill += 0.65;
        }
    }

    return `${bill.toFixed(2)}`;
}

function calculateBtnClicked(){
    let billStringVal = billStringEl.value;

    let roundedBillTotal = totalPhoneBill(billStringVal);
    billTotalEl.innerHTML = roundedBillTotal;

    roundedBillTotal >= 30 ? billTotalEl.classList.add("warning") : billTotalEl.classList.remove("warning")
    roundedBillTotal >=50 ? billTotalEl.classList.add("danger") : billTotalEl.classList.remove("danger")
}

calculateBtn.addEventListener('click', calculateBtnClicked)