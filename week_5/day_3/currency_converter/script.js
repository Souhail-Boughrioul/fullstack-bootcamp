const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const form = document.getElementById('form');
const amountInput = document.querySelector('.amount');
const output = document.querySelector('.output');


const currencyOptions = (data)=>{
    if (!Array.isArray(data)) {
        console.error("Invalid currency data", data);
        return;
    }

    fromCurrency.innerHTML = "";
    toCurrency.innerHTML = "";
   
    data.forEach(item => {
        fromCurrency.innerHTML += `
            <option class='from-value' value=${item[0]}>${item[0]} - ${item[1]}</option>
        `
        toCurrency.innerHTML += `
            <option class='to-value' value=${item[0]}>${item[0]} - ${item[1]}</option>
        `
    });

    fromCurrency.value = "USD";
    toCurrency.value = "MAD";
}


const supportedCurrency = async ()=>{
    fromCurrency.innerHTML = "<option>Loading...</option>";
    toCurrency.innerHTML = "<option>Loading...</option>";
    try{
        const response = await fetch('https://v6.exchangerate-api.com/v6/dd8cbf5cd9ba2905cc8c099c/codes');
        if(response.ok){
            const data = await response.json();
            currencyOptions(data.supported_codes)
        }else{
            throw new Error(`Error: ${response.status}`)
        }
    }catch(err){
        console.log('There is a problem in fetching the supported currency data', err.message)
    }
}

const pairConversion = async (from,to,amount)=>{
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/dd8cbf5cd9ba2905cc8c099c/pair/${from}/${to}/${amount}`)
         if(response.ok){
            const data = await response.json();
            return data.conversion_result;
        }else{
            throw new Error(`Error: ${response.status}`)
        }
    }catch(err){
        console.log('There is a problem in fetching the pair conversion data',err.message)
    }

}

supportedCurrency()


form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const selectedFromValue = fromCurrency.value;
    const selectedToValue = toCurrency.value;
    const amountValue = parseFloat(amountInput.value);

    if (isNaN(amountValue) || amountValue <= 0) {
        output.innerHTML = "Please enter a valid amount.";
        return;
    }

     output.innerHTML = "⏳ Converting...";

    const result = await pairConversion(selectedFromValue, selectedToValue, amountValue);

    if (result) {
        output.innerHTML = `${result.toFixed(2)}`;
    } else {
        output.innerHTML = "Conversion failed. Please try again.";
    }

})

