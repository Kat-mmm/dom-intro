// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let rdBtns = document.querySelectorAll(".billItemTypeRadio");
const radioAddBtn = document.querySelector(".radioBillAddBtn");
let radioCallEl = document.querySelector(".callTotalTwo");
let radioSmsEl = document.querySelector(".smsTotalTwo");
let radioTotal = document.querySelector(".totalTwo");

let checkedVal = '';
rdBtns.forEach((item) => {
    item.addEventListener('change', () =>{
        checkedVal = item.value;
    });
});

let radioSmsTotal = 0;
let radioCallTotal = 0;
let overallTotal = 0;

function radioTotalBill(){
    if(checkedVal === 'sms'){
        if(overallTotal < 50){
            radioSmsTotal += 0.75;
        }
    }
    else if(checkedVal === 'call'){
        if(overallTotal < 50){
            radioCallTotal += 2.75;
        }
    }

    radioSmsEl.innerHTML = radioSmsTotal.toFixed(2);
    radioCallEl.innerHTML = radioCallTotal.toFixed(2);

    overallTotal = radioSmsTotal + radioCallTotal;
    radioTotal.innerHTML = overallTotal.toFixed(2);

    if(overallTotal >= 30){
        radioTotal.classList.add("warning");
    }
    overallTotal >= 50 ? radioTotal.classList.add("danger") : null;
}

radioAddBtn.addEventListener('click', radioTotalBill)
