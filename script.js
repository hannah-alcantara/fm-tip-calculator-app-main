const billAmountInput = document.getElementById('billAmount');
const numPeopleInput = document.getElementById('numPeople');
const customTipInput = document.getElementById('custom');
const tipPercentageButtons = document.querySelectorAll('.tip');
const tipResult = document.getElementById('tipAmount');
const totalResult = document.getElementById('totalAmount');
const resetButton = document.getElementById('reset')

// Event listeners
tipPercentageButtons.forEach(button => {
    button.addEventListener("click", function (){
        const tipPercentage = parseFloat(button.textContent) / 100;
        if(validatePeopleAmount()){
            calculateTip(tipPercentage);
        }
    });
});

customTipInput.addEventListener("input", function(){
    const customTipPercentage = parseFloat(customTipInput.value);
    const tipPercentage = customTipPercentage / 100;
    if(validatePeopleAmount()){
        calculateTip(tipPercentage);
    }
})

customTipInput.addEventListener("click", function(){
    if(validatePeopleAmount()){
        calculateTip(tipPercentage);
    }
})

resetButton.addEventListener("click", function(){
    billAmountInput.value = "";
    numPeopleInput.value = "";
    tipResult.textContent = "$0.00";
    totalResult.textContent = "$0.00";
    customTipInput = "";
})

// Function to validate the "Number of People" input
function validatePeopleAmount() {
    const peopleAmount = parseFloat(numPeopleInput.value);
    if (!(peopleAmount >= 0)) {
        // alert("Please enter a valid number of people.");
        return false;
    }
    return true;
}

function calculateTip(tipPercentage){
    const billAmount = parseFloat(billAmountInput.value);
    // const peopleAmount = parseInt(numPeopleInput.value);


    const tipCalc = billAmount * tipPercentage;
    const tipPerPerson = tipCalc / parseFloat(numPeopleInput.value);
    const totalPerPerson = billAmount + tipPerPerson;

    tipResult.textContent = "$" + tipPerPerson.toFixed(2);
    totalResult.textContent = "$" + totalPerPerson.toFixed(2);
}



//Read bill input
//Read selected tip percentage
//Read Number of People
//calculate: (bill * percentage) + bill
//calculate: divide by # of people
//show in tip Amount

//Fix validating number of people before tip percent
//Listen input changes
