$(document).ready(function(){
    const apiKeyWeather = "abb73e61ebb1b7746ebb817ea591d018";
    const urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + apiKeyWeather;

    $.ajax({
       url: urlWeather,
       method: "GET",
    }).then(function(response){
        console.log(response);
    }); // end ajax Weather
   
}); // end document.ready