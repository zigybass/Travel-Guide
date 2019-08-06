$(document).ready(function () {
    // $(".col-12").attr("class", "text-center");

    const countryCode = {
        'AF': 'Afghanistan',
        'AX': 'Aland Islands',
        'AL': 'Albania',
        'DZ': 'Algeria',
        'AS': 'American Samoa',
        'AD': 'Andorra',
        'AO': 'Angola',
        'AI': 'Anguilla',
        'AQ': 'Antarctica',
        'AG': 'Antigua And Barbuda',
        'AR': 'Argentina',
        'AM': 'Armenia',
        'AW': 'Aruba',
        'AU': 'Australia',
        'AT': 'Austria',
        'AZ': 'Azerbaijan',
        'BS': 'Bahamas',
        'BH': 'Bahrain',
        'BD': 'Bangladesh',
        'BB': 'Barbados',
        'BY': 'Belarus',
        'BE': 'Belgium',
        'BZ': 'Belize',
        'BJ': 'Benin',
        'BM': 'Bermuda',
        'BT': 'Bhutan',
        'BO': 'Bolivia',
        'BA': 'Bosnia And Herzegovina',
        'BW': 'Botswana',
        'BV': 'Bouvet Island',
        'BR': 'Brazil',
        'IO': 'British Indian Ocean Territory',
        'BN': 'Brunei Darussalam',
        'BG': 'Bulgaria',
        'BF': 'Burkina Faso',
        'BI': 'Burundi',
        'KH': 'Cambodia',
        'CM': 'Cameroon',
        'CA': 'Canada',
        'CV': 'Cape Verde',
        'KY': 'Cayman Islands',
        'CF': 'Central African Republic',
        'TD': 'Chad',
        'CL': 'Chile',
        'CN': 'China',
        'CX': 'Christmas Island',
        'CC': 'Cocos (Keeling) Islands',
        'CO': 'Colombia',
        'KM': 'Comoros',
        'CG': 'Congo',
        'CD': 'Congo, Democratic Republic',
        'CK': 'Cook Islands',
        'CR': 'Costa Rica',
        'CI': 'Cote D\'Ivoire',
        'HR': 'Croatia',
        'CU': 'Cuba',
        'CY': 'Cyprus',
        'CZ': 'Czech Republic',
        'DK': 'Denmark',
        'DJ': 'Djibouti',
        'DM': 'Dominica',
        'DO': 'Dominican Republic',
        'EC': 'Ecuador',
        'EG': 'Egypt',
        'SV': 'El Salvador',
        'GQ': 'Equatorial Guinea',
        'ER': 'Eritrea',
        'EE': 'Estonia',
        'ET': 'Ethiopia',
        'FK': 'Falkland Islands (Malvinas)',
        'FO': 'Faroe Islands',
        'FJ': 'Fiji',
        'FI': 'Finland',
        'FR': 'France',
        'GF': 'French Guiana',
        'PF': 'French Polynesia',
        'TF': 'French Southern Territories',
        'GA': 'Gabon',
        'GM': 'Gambia',
        'GE': 'Georgia',
        'DE': 'Germany',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GR': 'Greece',
        'GL': 'Greenland',
        'GD': 'Grenada',
        'GP': 'Guadeloupe',
        'GU': 'Guam',
        'GT': 'Guatemala',
        'GG': 'Guernsey',
        'GN': 'Guinea',
        'GW': 'Guinea-Bissau',
        'GY': 'Guyana',
        'HT': 'Haiti',
        'HM': 'Heard Island & Mcdonald Islands',
        'VA': 'Holy See (Vatican City State)',
        'HN': 'Honduras',
        'HK': 'Hong Kong',
        'HU': 'Hungary',
        'IS': 'Iceland',
        'IN': 'India',
        'ID': 'Indonesia',
        'IR': 'Iran, Islamic Republic Of',
        'IQ': 'Iraq',
        'IE': 'Ireland',
        'IM': 'Isle Of Man',
        'IL': 'Israel',
        'IT': 'Italy',
        'JM': 'Jamaica',
        'JP': 'Japan',
        'JE': 'Jersey',
        'JO': 'Jordan',
        'KZ': 'Kazakhstan',
        'KE': 'Kenya',
        'KI': 'Kiribati',
        'KR': 'Korea',
        'KW': 'Kuwait',
        'KG': 'Kyrgyzstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LV': 'Latvia',
        'LB': 'Lebanon',
        'LS': 'Lesotho',
        'LR': 'Liberia',
        'LY': 'Libyan Arab Jamahiriya',
        'LI': 'Liechtenstein',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'MO': 'Macao',
        'MK': 'Macedonia',
        'MG': 'Madagascar',
        'MW': 'Malawi',
        'MY': 'Malaysia',
        'MV': 'Maldives',
        'ML': 'Mali',
        'MT': 'Malta',
        'MH': 'Marshall Islands',
        'MQ': 'Martinique',
        'MR': 'Mauritania',
        'MU': 'Mauritius',
        'YT': 'Mayotte',
        'MX': 'Mexico',
        'FM': 'Micronesia, Federated States Of',
        'MD': 'Moldova',
        'MC': 'Monaco',
        'MN': 'Mongolia',
        'ME': 'Montenegro',
        'MS': 'Montserrat',
        'MA': 'Morocco',
        'MZ': 'Mozambique',
        'MM': 'Myanmar',
        'NA': 'Namibia',
        'NR': 'Nauru',
        'NP': 'Nepal',
        'NL': 'Netherlands',
        'AN': 'Netherlands Antilles',
        'NC': 'New Caledonia',
        'NZ': 'New Zealand',
        'NI': 'Nicaragua',
        'NE': 'Niger',
        'NG': 'Nigeria',
        'NU': 'Niue',
        'NF': 'Norfolk Island',
        'MP': 'Northern Mariana Islands',
        'NO': 'Norway',
        'OM': 'Oman',
        'PK': 'Pakistan',
        'PW': 'Palau',
        'PS': 'Palestinian Territory, Occupied',
        'PA': 'Panama',
        'PG': 'Papua New Guinea',
        'PY': 'Paraguay',
        'PE': 'Peru',
        'PH': 'Philippines',
        'PN': 'Pitcairn',
        'PL': 'Poland',
        'PT': 'Portugal',
        'PR': 'Puerto Rico',
        'QA': 'Qatar',
        'RE': 'Reunion',
        'RO': 'Romania',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'BL': 'Saint Barthelemy',
        'SH': 'Saint Helena',
        'KN': 'Saint Kitts And Nevis',
        'LC': 'Saint Lucia',
        'MF': 'Saint Martin',
        'PM': 'Saint Pierre And Miquelon',
        'VC': 'Saint Vincent And Grenadines',
        'WS': 'Samoa',
        'SM': 'San Marino',
        'ST': 'Sao Tome And Principe',
        'SA': 'Saudi Arabia',
        'SN': 'Senegal',
        'RS': 'Serbia',
        'SC': 'Seychelles',
        'SL': 'Sierra Leone',
        'SG': 'Singapore',
        'SK': 'Slovakia',
        'SI': 'Slovenia',
        'SB': 'Solomon Islands',
        'SO': 'Somalia',
        'ZA': 'South Africa',
        'GS': 'South Georgia And Sandwich Isl.',
        'ES': 'Spain',
        'LK': 'Sri Lanka',
        'SD': 'Sudan',
        'SR': 'Suriname',
        'SJ': 'Svalbard And Jan Mayen',
        'SZ': 'Swaziland',
        'SE': 'Sweden',
        'CH': 'Switzerland',
        'SY': 'Syrian Arab Republic',
        'TW': 'Taiwan',
        'TJ': 'Tajikistan',
        'TZ': 'Tanzania',
        'TH': 'Thailand',
        'TL': 'Timor-Leste',
        'TG': 'Togo',
        'TK': 'Tokelau',
        'TO': 'Tonga',
        'TT': 'Trinidad And Tobago',
        'TN': 'Tunisia',
        'TR': 'Turkey',
        'TM': 'Turkmenistan',
        'TC': 'Turks And Caicos Islands',
        'TV': 'Tuvalu',
        'UG': 'Uganda',
        'UA': 'Ukraine',
        'AE': 'United Arab Emirates',
        'GB': 'United Kingdom',
        'US': 'United States',
        'UM': 'United States Outlying Islands',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VU': 'Vanuatu',
        'VE': 'Venezuela',
        'VN': 'Viet Nam',
        'VG': 'Virgin Islands, British',
        'VI': 'Virgin Islands, U.S.',
        'WF': 'Wallis And Futuna',
        'EH': 'Western Sahara',
        'YE': 'Yemen',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe',
    }

    const countryIdToCurrencyId = {
        AD: "EUR",
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

    let cityName;
    let countryCodel;

    for (let [key, value] of Object.entries(countryCode)) {
        $("#countryList").append(`<option value=${key}>${value}</option>`)
    }


    

    //************************************************************************************************************************* */

    //Location API
    $("#locationIcon").on("click", function () {

        let queryURL = "http://ip-api.com/json/?fields=city,country,countryCode";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

            cityName = response.city;
            countryCodel = response.countryCode;
            console.log(cityName);
            $("#cityName").html("<h3> Welcome to " + cityName + "</h3>");
            console.log(countryCodel)
            //APIs

            apiWeather();
            currencyAPI();
            urlQuery();
            $("#base").val("");
            $("#conversion").val("");
            let iLon= response.lon;
            let iLat= response.lat;

            $("#zomatoDiv").empty();
            showTargetLocation(iLon,iLat);
        });
    }); // end locationIcon click


    $("#citySubmit").click(function (e) {
        e.preventDefault();
        cityName = $("#cityInput").val().trim();
        countryCodel = $("#countryList").val();
        $("#cityName").html("<h3> Welcome to " + cityName + "</h3>");
        apiWeather();
        urlQuery();
        currencyAPI();
        $("#base").val("");
        $("#conversion").val("");
    });

    function apiWeather() {
        const apiKeyWeather = "abb73e61ebb1b7746ebb817ea591d018";
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCodel}&appid=${apiKeyWeather}`;
        const weekForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCodel}&appid=${apiKeyWeather}`;
        console.log("City: " + cityName + "/  Country:" + countryCodel);

        localStorage.setItem("City", cityName);
        localStorage.setItem("Country", countryCodel);

        $.ajax({
            url: weatherURL,
            method: "GET",
        }).then(function (response) {

            let iLon= response.coord.lon;
            let iLat= response.coord.lat;

            $("#zomatoDiv").empty();
            showTargetLocation(iLon,iLat);

            console.log(response.main.temp, response.main.temp_min, response.main.temp_max);
            console.log(weatherURL);

            const date = new Date(response.dt * 1000); 
            const dateString = date.toDateString()
            // $("#city-name").text(`City Name: ${response.name}`);
            // $("#city-id").text(`City ID: ${response.id}`);
            $("#date").text(dateString);
            $(".icon").append(`<img src="./assets/images/forecast/${response.weather[0].icon}.svg" alt="">  `);
            $(".icon").append(`<p>${response.weather[0].description}</p>`);
            $(".temperature").append(`<div class="currentTemp">${response.main.temp}</div>`);
            $(".temperature").append(`<p> Min: ${response.main.temp_min} </p> `);
            $(".temperature").append(`<p> Max: ${response.main.temp_max} </p>  `);

        });

        $.ajax({
            url: weekForecastURL,
            method: "GET",
        }).then(function (forecast) {
            console.log(forecast);
            console.log(weekForecastURL);
        });


    } //weather API ends
    //******************************************************************************************************************************** */
    //Currency API starts

    function currencyAPI() {

        $("baseCurrency").val()

        // Builds AJAX URL:
        const baseUrl = "https://openexchangerates.org/api/latest.json?";
        const apiId = "app_id=50c687c3304e40edbf02595e616bb76a";
        let currencyString = baseUrl + apiId;
        $.ajax({
            url: currencyString,
            method: "GET",
        }).then(function (response) {

            for (let [key] of Object.entries(response.rates)) {
                $("#baseCurrency").append(`<option>${key}</option>`)
                $("#toCurrency").append(`<option>${key}</option>`)
        
            }
            

            // Creates array of Currency IDs for form
            const currencyIdArray = Object.keys(response.rates);
            console.log(currencyIdArray);


            // Converts input country data to country's currency 
            let userCurr = "USD";
            let countryCurr = countryIdToCurrencyId[countryCodel];

            let flipCounter = 3;

            $("#baseCurrency").val(userCurr);
            $("#toCurrency").val(countryCurr);

            let b = $("#baseCurrency option:selected").val()
            let t = $("#toCurrency option:selected").val()

            // Converts USD to target Currency.
            function currencyConverter(currNum) {
                let ratio = response.rates[countryCurr]
                if ( flipCounter % 2 !== 0 ) {
                    return currNum * ratio;
                } else {
                    return currNum / ratio;
                }
            };

            // WIP: converts currencies on click. 
            $("#convert").on("click", function (e) {
                e.preventDefault();
                let baseCurr = $("#base").val();
                let convertedRate = currencyConverter(baseCurr);
                $("#conversion").val(convertedRate);
                //$("#target").text(`<input type="text" ${currencyConverter(baseCurr, ratio)} />`)
                console.log(baseCurr);
            });

            $("#currSwitch").on("click", function (e) {
                e.preventDefault();
                $("#conversion").val("")
                $("#base").val("")
                flipCounter++;
                if ( flipCounter % 2 == 0 ) {
                    $("#baseCurrency").val(t);
                    $("#toCurrency").val(b);
            } else { 
                $("#baseCurrency").val(b);
                $("#toCurrency").val(t);
            }
                //let target = $("#target").val();
                //$("#base").text(flipConverter(target));
                //console.log(target);
            })


        })


    }//end of currencyAPI

    function urlQuery(){
        const forecastURL = `./forecast.html?city=${cityName}&countryCode=${countryCodel}` 
        $("#weather-card a").attr("href",forecastURL);
    }

});  // end onf document.ready
