// The Most Important Is JS File
fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1c35056627064465aff638fe89d616c5"
)
    .then((res) => res.json())
    .then((currency) => {
        let amount = +document.querySelector(".amount").innerHTML;

        document.querySelector(".jod span").innerHTML = (
            amount * parseFloat(currency.rates["JOD"])
        ).toFixed(2);
        document.querySelector(".egp span").innerHTML = (
            amount * parseFloat(currency.rates["EGP"])
        ).toFixed(2);
        document.querySelector(".sar span").innerHTML = (
            amount * parseFloat(currency.rates["SAR"])
        ).toFixed(2);
        document.querySelector(".eur span").innerHTML = (
            amount * parseFloat(currency.rates["EUR"])
        ).toFixed(2);
        document.querySelector(".gbp span").innerHTML = (
            amount * parseFloat(currency.rates["GBP"])
        ).toFixed(2);
    })
    .catch((error) => {
        console.error("Error fetching currency rates: ", error);
    });
