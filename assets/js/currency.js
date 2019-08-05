$(document).ready(function(){


    // Currency Exchange API ------------------------------------------
    

    // Builds AJAX URL:
    const baseUrl = "https://openexchangerates.org/api/latest.json?";
    const apiId = "app_id=50c687c3304e40edbf02595e616bb76a";
    let currencyString = baseUrl + apiId;

  // AJAX request for daily currency exchange rates.
    $.ajax({
        url: currencyString,
        method: "GET",
    }).then(function (response) {
        userCountryCode = response.rates.USD;


    // 2-letter country ID matched to corresponding currency.
    const countryIdToCurrencyId = {
        AD:"EUR",
        AE: "AED",
        AF: "AFN",
        AG: "XCD",
        AI: "XCD",
        AL: "ALL",
        AM: "AMD",
        AN: "ANG",
        AO: "AOA",
        AQ: "AQD",
        AR: "ARS",
        AS: "EUR",
        AT: "EUR",
        AU: "AUD",
        AW: "ANG",
        AX: "EUR",
        AZ: "AZN",
        BA: "BAM",
        BB: "BBD",
        BD: "BDT",
        BE: "EUR",
        BF: "XOF",
        BG: "BGN",
        BH: "BHD",
        BI: "BIF",
        BJ: "XOF",
        BL: "EUR",
        BM: "BMD",
        BN: "BND",
        BO: "BOB",
        BR: "BRL",
        BS: "BSD",
        BT: "INR",
        BV: "NOK",
        BW: "BWP",
        BY: "BYR",
        BZ: "BZD",
        CA: "CAD",
        CC: "AUD",
        CD: "CDF",
        CF: "XAF",
        CG: "XAF",
        CH: "CHF",
        CI: "XOF",
        CK: "NZD",
        CL: "CLP",
        CM: "XAF",
        CN: "CNY",
        CO: "COP",
        CR: "CRC",
        CU: "CUP",
        CV: "CVE",
        CX: "AUD",
        CY: "CYP",
        CZ: "CZK",
        DE: "EUR",
        DJ: "DJF",
        DK: "DKK",
        DM: "XCD",
        DO: "DOP",
        DZ: "DZD",
        EC: "ECS",
        EE: "EEK",
        EG: "EGP",
        EH: "MAD",
        ER: "ETB",
        ES: "EUR",
        ET: "ETB",
        FI: "EUR",
        FJ: "FJD",
        FK: "FKP",
        FM: "USD",
        FO: "DKK",
        FR: "EUR",
        GA: "XAF",
        GB: "GBP",
        GD: "XCD",
        GE: "GEL",
        GF: "EUR",
        GG: "GGP",
        GH: "GHS",
        GI: "GIP",
        GL: "DKK",
        GM: "GMD",
        GN: "GNF",
        GP: "EUR",
        GQ: "XAF",
        GR: "EUR",
        GS: "GBP",
        GT: "GTQ",
        GU: "USD",
        GW: "XOF",
        GY: "GYD",
        HK: "HKD",
        HM: "AUD",
        HN: "HNL",
        HR: "HRK",
        HT: "HTG",
        HU: "HUF",
        ID: "IDR",
        IE: "EUR",
        IL: "ILS",
        IM: "GBP",
        IN: "INR",
        IO: "USD",
        IQ: "IQD",
        IR: "IRR",
        IS: "ISK",
        IT: "EUR",
        JE: "GBP",
        JM: "JMD",
        JO: "JOD",
        JP: "JPY",
        KE: "KES",
        KG: "KGS",
        KH: "KHR",
        KI: "AUD",
        KM: "KMF",
        KN: "XCD",
        KP: "KPW",
        KR: "KRW",
        KW: "KWD",
        KY: "KYD",
        KZ: "KZT",
        LA: "LAK",
        LB: "LBP",
        LC: "XCD",
        LI: "CHF",
        LK: "LKR",
        LR: "LRD",
        LS: "LSL",
        LT: "LTL",
        LU: "EUR",
        LV: "LVL",
        LY: "LYD",
        MA: "MAD",
        MC: "EUR",
        MD: "MDL",
        ME: "EUR",
        MF: "ANG",
        MG: "MGA",
        MH: "USD",
        MK: "MKD",
        ML: "XOF",
        MM: "MMK",
        MN: "MNT",
        MO: "MOP",
        MP: "USD",
        MQ: "EUR",
        MR: "MRO",
        MS: "XCD",
        MT: "MTL",
        MU: "MUR",
        MV: "MVR",
        MW: "MWK",
        MX: "MXN",
        MY: "MYR",
        MZ: "MZN",
        NA: "NAD",
        NC: "XPF",
        NE: "XOF",
        NF: "AUD",
        NG: "NGN",
        NI: "NIO",
        NL: "EUR",
        NO: "NOK",
        NP: "NPR",
        NR: "AUD",
        NU: "NZD",
        NZ: "NZD",
        OM: "OMR",
        PA: "PAB",
        PE: "PEN",
        PF: "XPF",
        PG: "PGK",
        PH: "PHP",
        PK: "PKR",
        PL: "PLN",
        PM: "EUR",
        PN: "NZD",
        PR: "USD",
        PS: "JOD",
        PT: "EUR",
        PW: "USD",
        PY: "PYG",
        QA: "QAR",
        RE: "EUR",
        RO: "RON",
        RS: "RSD",
        RU: "RUB",
        RW: "RWF",
        SA: "SAR",
        SB: "SBD",
        SC: "SCR",
        SD: "SDG",
        SE: "SEK",
        SG: "SGD",
        SH: "GBP",
        SI: "EUR",
        SJ: "NOK",
        SK: "SKK",
        SL: "SLL",
        SM: "EUR",
        SN: "XOF",
        SO: "SOS",
        SR: "SRD",
        ST: "STD",
        SV: "SVC",
        SY: "SYP",
        SZ: "SZL",
        TC: "USD",
        TD: "XAF",
        TF: "EUR",
        TG: "XOF",
        TH: "THB",
        TJ: "TJS",
        TK: "NZD",
        TM: "TMT",
        TN: "TND",
        TO: "TOP",
        TP: "IDR",
        TR: "TRY",
        TT: "TTD",
        TV: "AUD",
        TW: "TWD",
        TZ: "TZS",
        UA: "UAH",
        UG: "UGX",
        UM: "USD",
        US: "USD",
        UY: "UYU",
        UZ: "UZS",
        VA: "EUR",
        VC: "XCD",
        VE: "VEF",
        VG: "USD",
        VI: "USD",
        VN: "VND",
        VU: "VUV",
        WF: "XPF",
        WS: "EUR",
        YE: "YER",
        YT: "EUR",
        ZA: "ZAR",
        ZM: "ZMK",
        ZW: "ZWD"
    }


    // Creates array of Currency IDs for form
    const currencyIdArray = Object.keys(response.rates);
    console.log(currencyIdArray);

    // Appends country IDs into dropdown for currency selections
    function dropdownCurr (arr) {
        for (let i = 0; i < arr.length; i++) {
            const aTag = $("<option>");
            aTag.text((arr[i]));
            $(".currency").append(aTag);
        }
    }
    dropdownCurr(currencyIdArray); 
    
    // Converts input country data to country's currency
    let countryId = "ES"; //this value should be equal to 2-Letter country code from IP-API or input box. 

    let countryCurr = countryIdToCurrencyId[countryId];
    console.log(countryCurr)
    let ratio = response.rates[countryCurr];
    console.log(ratio);



// Converts USD to target Currency.
function currencyConverter (currNum, ratio) {
    return currNum * ratio;
};
// Converts target Currency back to USD
function flipConverter (currNum, ratio) {
    return currNum / ratio;
}

// WIP: converts currencies on click. Maybe Coti's performs better?
$("#convert").on("click", function () {
    let baseCurr = $("base").val();
    $("#target").text(currencyConverter(baseCurr, ratio));
});

$("#currSwitch").on("click", function () {
    let target = $("target").val();
    $("#base").text(flipConverter(target, ratio));
})



})
}); // end document.ready