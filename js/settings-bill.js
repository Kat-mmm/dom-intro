// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
let radioBtns = document.querySelectorAll(".billItemTypeWithSettings");
const addSettingsBillBtn = document.querySelector(".settingsAddBtn");
let callSettingsTotals = document.querySelector(".callTotalSettings");
let smsSettingsTotals = document.querySelector(".smsTotalSettings");
let settingsTotal = document.querySelector(".totalSettings");
let callCost = document.querySelector('.callCostSetting');
let smsCost = document.querySelector('.smsCostSetting');
let warningLevel = document.querySelector(".warningLevelSetting");
let criticalLevel = document.querySelector(".criticalLevelSetting");
const updateSettingsBtn = document.querySelector(".updateSettings")

let checkedValue = '';
radioBtns.forEach((item) => {
    item.addEventListener('change', () =>{
        checkedValue = item.value;
    });
});

// let smsCosts = 0;
// let callCosts = 0;

// let criticalLevels = 0;
// let warningLevels = 0;

let settings = settingsBill();

function updateLevels(el, total, warningLevel, criticalLevel){
    total >= warningLevel ? el.classList.add("warning") : el.classList.remove("warning")
    total >= criticalLevel ? el.classList.add("danger") : el.classList.remove("danger")
}

function updateSettinsBill(){
    settings.setSmsCost(Number(smsCost.value));
    settings.setCallCost(Number(callCost.value));

    settings.setWarningLevel(Number(warningLevel.value));
    settings.setCriticalLevel(Number(criticalLevel.value));

    updateLevels(settingsTotal, settings.getTotal(), settings.getWarningLevel(), settings.getCriticalLevel());
}

updateSettingsBtn.addEventListener('click', updateSettinsBill)

// let settingsCallsTotal = 0;
// let settingsSmsToatl = 0;
// let grandTotal =  0;

function totalSettingsBill(){
    if(checkedValue === 'sms'){
        // if(grandTotal < criticalLevels){
        //     settingsSmsToatl += Number(smsCosts);
        // }
        settings.sendSms();
        
    }
    else if(checkedValue === 'call'){
        // if(grandTotal < criticalLevels){
        //     settingsCallsTotal += Number(callCosts);
        // }
        settings.makeCall();
    }

    callSettingsTotals.innerHTML = settings.getCallTotal()
    smsSettingsTotals.innerHTML = settings.getSmsTotal()

    settingsTotal.innerHTML = settings.getTotal();

    updateLevels(settingsTotal, settings.getTotal(), settings.getWarningLevel(), settings.getCriticalLevel());
}

addSettingsBillBtn.addEventListener('click', totalSettingsBill);


