
let inputLanguageSelectionAbbreviation;
let outputLanguageSelectionAbbreviation;
let inputReady = false;
let outputReady = false;
const phraseAndTranslation = [];

myTranslationData()
displaySavedData(phraseAndTranslation);
function myTranslationData() {
const getData = localStorage.getItem("yourTranslations")
const translations = JSON.parse(getData);
backToPhraseAndTranslation(translations);
};


$(".dropdown-input-language").on("click", function () {
    let inputLanguageSelection = $(this).attr("id");
    inputLanguageSelectionAbbreviation = $(this).attr("data-type");
    $("#label-input-language").empty();
    $("#label-input-language").append(inputLanguageSelection);
    inputReady = true;
});

$(".dropdown-output-language").on("click", function () {
    let outputLanguageSelection = $(this).attr("id");
    outputLanguageSelectionAbbreviation = $(this).attr("data-type");
    $("#label-output-language").empty();
    $("#label-output-language").append(outputLanguageSelection);
    outputReady = true;
});

$("#translateButton").on("click", function () {
    const inputText = $("#inputTextArea").val();
    $("#outputTextArea").empty();
    $("#outputText").empty();
    if (inputReady && outputReady == true) {
        const abbreviationToAPI = (inputLanguageSelectionAbbreviation + "-" + outputLanguageSelectionAbbreviation);
        if (inputText != "") {
            //translation(inputText, abbreviationToAPI);
            appendingAllPreviousTrans(inputText);
            arryParce(phraseAndTranslation);
        }
    }
});


function displaySavedData (phraseAndTranslation)
{
    for (let x = 0; x<phraseAndTranslation.length;x++)
    {
       console.log(phraseAndTranslation[x].phrase)
    }
}



function appendingAllPreviousTrans(inputText) {
    $('#yourPreviousTranslations').append(`
    <div class="form-row">
        <div class="form-group col-md-6">
            <p id="previousTranslationInput">${inputText}</p>
        </div>
        <div class="form-group col-md-6">
            <p id="previousTranslationOutput">${inputText}</p>
        </div>
    </div>
    `);
    toArrayAndStringigy(inputText);
};

function toArrayAndStringigy(inputText) {
    const translationObject = {
        phrase: inputText,
        translation: inputText
    };
    phraseAndTranslation.push(translationObject);
    localStorage.setItem("yourTranslations", JSON.stringify(phraseAndTranslation))
}


function backToPhraseAndTranslation(array){
    for (let x = 0; x<array.length;x++)
    {
        phraseAndTranslation.push(array[x]);
    }
}



// function translation(inputText, abbreviationToAPI) {
//     const data = {
//         "text": [inputText],
//         "model_id": abbreviationToAPI
//     };
//     const apiKey = "BCXmk2ySCo-GQzFNHSw3MoWixoUQljQwvzPTme1hV0Dl";
//     const settings = {
//         "url": "https://cors-anywhere.herokuapp.com/https://gateway-wdc.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "Authorization": `Basic ${btoa(`apikey:${apiKey}`)}`
//         },
//         "data": JSON.stringify(data)
//     }
//     $.ajax(settings).then(function (response) {
//         $("#outputTextArea").append(response.translations[0].translation);
//     });
// };