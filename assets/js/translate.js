
let inputLanguageSelectionAbbreviation;
let outputLanguageSelectionAbbreviation;
let inputReady = false;
let outputReady = false;
let induvidualTranslationValue = 0;
let stringifyVersion;
let phraseAndTranslation = [];
let inputLanguageSelection;
let outputLanguageSelection;

useDefault();

function useDefault() {
    inputLanguageSelection = "English";
    inputLanguageSelectionAbbreviation = "en";
    $("#label-input-language").empty();
    $("#label-input-language").append(inputLanguageSelection);
    inputReady = true;
}

if (localStorage.getItem("ourArrayToString") != null) {
    localStorageItems();
};

function localStorageItems() {
    dataFromStorage = localStorage.getItem("ourArrayToString");
    dataFromStorageParse = JSON.parse(dataFromStorage);
    for (let x = 0; x < dataFromStorageParse.length; x++) {
        appending(dataFromStorageParse[x].phrase, dataFromStorageParse[x].translation, dataFromStorageParse[x].input, dataFromStorageParse[x].output);
    }
};

$("#clearAllTranslations").on("click", function () {
    if (localStorage.getItem("ourArrayToString") != null) {
        localStorage.clear();
        induvidualTranslationValue = 0;
        stringifyVersion = null;
        phraseAndTranslation = [];
        $('#yourPreviousTranslations').empty();
    };
})

$(document).on('click', '#deleteIndividual', function () {
    induvidualTranslationValue = 0;
    stringifyVersion = null;
    phraseAndTranslation = [];
    console.log($(this).attr("value"))
    const dataFromStorage = localStorage.getItem("ourArrayToString");
    let parseDataFromStorage = JSON.parse(dataFromStorage);
    parseDataFromStorage.splice($(this).attr("value"), 1);
    const backToString = JSON.stringify(parseDataFromStorage)
    console.log(backToString);
    localStorage.clear()
    saveStringifyVersion(backToString);
    $('#yourPreviousTranslations').empty();
    localStorageItems();
});

$(".dropdown-input-language").on("click", function () {
    inputLanguageSelection = $(this).attr("id");
    inputLanguageSelectionAbbreviation = $(this).attr("data-type");
    $("#label-input-language").empty();
    $("#label-input-language").append(inputLanguageSelection);
    inputReady = true;
});

$(".dropdown-output-language").on("click", function () {
    outputLanguageSelection = $(this).attr("id");
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
            translation(inputText, abbreviationToAPI);


        }
    }
});

function translation(inputText, abbreviationToAPI) {
    const data = {
        "text": [inputText],
        "model_id": abbreviationToAPI
    };
    const apiKey = "BCXmk2ySCo-GQzFNHSw3MoWixoUQljQwvzPTme1hV0Dl";
    const settings = {
        "url": "https://cors-anywhere.herokuapp.com/https://gateway-wdc.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Basic ${btoa(`apikey:${apiKey}`)}`
        },
        "data": JSON.stringify(data)
    }
    $.ajax(settings).then(function (response) {
        $("#outputTextArea").append(response.translations[0].translation);
        appending(inputText, response.translations[0].translation, inputLanguageSelection, outputLanguageSelection);

    });

};

function appending(inputText, response, inputLanguageSelection, outputLanguageSelection) {
    let color = "bg-white";
    if (induvidualTranslationValue % 2 === 0) {
        color = "bg-light";
    };
    $('#yourPreviousTranslations').prepend(`
        <li class="form-row individual-translations ${color}" id="${induvidualTranslationValue}">
                <div class="form-group col-md-5 text-center">
                        <span class="badge badge-pill badge-info bg-secondary">${inputLanguageSelection}</span>
                        <p class="m-2" id="previousTranslationInput">${inputText}</p>
                </div>
                <div class="form-group col-md-5 text-center">
                                        <span class="badge badge-pill badge-info bg-secondary">${outputLanguageSelection}</span>
                                        <p class="m-2" id="previousTranslationOutput">${response}</p>
                </div>
                <div class="col-2">
                                <button type="button" class="btn btn-outline-danger individual-delete-button float-right m-3" 
                                id="deleteIndividual" value="${induvidualTranslationValue}"><i class="far fa-trash-alt"></i></button>
                </div>
        </li>
    `)

    induvidualTranslationValue++;

    toArrayAndStringify(inputText, response, inputLanguageSelection, outputLanguageSelection);
};

function saveStringifyVersion(stringifyVersion) {
    localStorage.clear();
    localStorage.setItem('ourArrayToString', stringifyVersion);
};

function toArrayAndStringify(inputText, response, inputLanguageSelection, outputLanguageSelection) {
    const translationObject = {
        phrase: inputText,
        translation: response,
        input: inputLanguageSelection,
        output: outputLanguageSelection
    };
    if (typeof (stringifyVersion) === "string") {
        JSON.parse(stringifyVersion);
        willaddtoarray(translationObject);
        console.log(stringifyVersion);
        console.log("the above is at toarrayandstring at if ")
    }
    else {
        willaddtoarray(translationObject);
        console.log(stringifyVersion);
        console.log("the above is at toarrayandstring at else ")
    }
};
function willaddtoarray(object) {
    phraseAndTranslation.push(object);
    stringifyVersion = JSON.stringify(phraseAndTranslation);
    console.log(stringifyVersion);
    console.log("the above is at willaddtoarray")
    saveStringifyVersion(stringifyVersion);
};

function backToPhraseAndTranslation(array) {
    for (let x = 0; x < array.length; x++) {
        phraseAndTranslation.push(array[x]);
        console.log("localstorage translationdata backtophrase");
    }
};

function displaySavedData(phraseAndTranslation) {
    for (let x = 0; x < phraseAndTranslation.length; x++) {
        appending(phraseAndTranslation[x].phrase, phraseAndTranslation[x].translation, phraseAndTranslation[x].input, phraseAndTranslation[x].output);
        console.log("@displaySavedData");
    }
};