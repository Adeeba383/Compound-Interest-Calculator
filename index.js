
function Calculate(){

    const principalInput = document.getElementById("Principal");
    const rateInput = document.getElementById("rate");
    const compoundSelect = document.getElementById("compound");
    const totalAmount = document.getElementById("total-amount");
    const currencyInput = document.getElementById("currency");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value) / 100; 
    let compound = Number(compoundSelect.value); 
    let currency = currencyInput.value;

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }

    let result;

    if (compound === 1) { 
        result = principal * Math.pow(1 + rate, 1);
    } 
    else if (compound === 12) { 
        result = principal * Math.pow(1 + rate/12, 1);
    } 
    else {
        result = principal; 
    }

    totalAmount.textContent = result.toLocaleString(undefined, { style: "currency", currency: currency, currencyDisplay: "symbol" });
}

function Reset(){
    document.getElementById("Principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("compound").value = "1";
    document.getElementById("currency").value = "USD";
    document.getElementById("total-amount").textContent = "$ 0.00";

}
