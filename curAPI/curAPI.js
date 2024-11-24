fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=7c72fbf3915c4a01bcbe11420a80fb2e")
.then((result)=>{
    let myData = result.json();
    return myData
}).then((currency)=>{
    let amount = document.querySelector(".amount");
    let egprice = document.querySelector(".egp span");
    let sarprice = document.querySelector(".sar span");
    egprice.innerHTML = Math.floor(amount.innerHTML * currency.rates["EGP"]);
    sarprice.innerHTML = Math.floor(amount.innerHTML * currency.rates["SAR"]);
})






















/* fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=7c72fbf3915c4a01bcbe11420a80fb2e")
.then((result)=>{
    //console.log(result);
    let myData = result.json();
    //console.log(myData)
    return myData
}).then((currency)=>{
    let amount = document.querySelector(".amount");
    let egprice = document.querySelector(".egp span");
    let sarprice = document.querySelector(".sar span");
    egprice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarprice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
    //console.log(currency.rates);
    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);
}) */