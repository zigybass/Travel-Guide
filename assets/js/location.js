$(document).ready(function () {
    
    $("#locationIcon").on("click", function () {

        let queryURL ="http://ip-api.com/json";

         $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response) {
            
            console.log(response);

         }).catch(function(error){
             console.log(error)
         })
         
     });
})


