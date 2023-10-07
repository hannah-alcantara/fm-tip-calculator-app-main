const billAmountInput = document.getElementById('billAmount');
const numPeopleInput = document.getElementById('numPeople');
const tipPercentageButtons = document.querySelectorAll('.tip');
const tipResult = document.getElementById('tipAmount');

// Event listeners for tip percentage buttons
tipPercentageButtons.forEach(button => {
    button.addEventListener("click", function (){
        const tipPercentage = parseFloat(button.textContent) / 100;
        calculateTip(tipPercentage);
    });
});

function calculateTip(tipPercentage){
    const billAmount = parseFloat(billAmountInput.value);
    const peopleAmount = parseInt(numPeopleInput.value);
    console.log("Bill Amount: ", billAmount);
    console.log("People Amount: ", peopleAmount);

    //change to validate number of people
    // if(! (billAmount > 0) || !(peopleAmount > 0)){
    //     tipResult.textContent = "0.00";
    // }

    const tipCalc = billAmount * tipPercentage;
    const tipPerPerson = tipCalc / peopleAmount;
    // const tipAmount = billAmount + tipCalc;
    tipResult.textContent = tipPerPerson.toFixed(2);
}



//Read bill input
//Read selected tip percentage
//Read Number of People
//calculate: (bill * percentage) + bill
//calculate: divide by # of people
//show in tip Amount