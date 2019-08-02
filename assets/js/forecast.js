$(document).ready(function(){
        const apiKeyWeather = "abb73e61ebb1b7746ebb817ea591d018";
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=imperial&appid=${apiKeyWeather}`;
        const weekForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&units=imperial&appid=${apiKeyWeather}`;

        $.ajax({
           url: weatherURL,
           method: "GET",
        }).then(function(response){
            console.log(response);
            console.log(weatherURL);
            $("#city-name").text(`City Name: ${response.name}`);
            $("#today-date").text(`City Name: ${response.name}`);
        });

        $.ajax({
            url: weekForecastURL,
            method: "GET",
         }).then(function(forecast){
             console.log(forecast);
             console.log(weekForecastURL);

            console.log(forecast.list)
            const days = {};

            forecast.list.forEach(function(element) {
               const date = element.dt_txt.split(" ").shift(); //Date
               const hour = element.dt_txt.split(" ").pop(); // Hour
            //    console.log(date); // Date
            //    console.log(hour); // Hour
                if (!days[date]){
                    days[date] = [element]
                } else {
                    days[date].push(element);
                }
            });
            console.log(days);

            for (let [key, value] of Object.entries(days)) {
                $("#forecast").append(` <div class="day col-12">
                                                <h3>Day: ${key} </h3>
                                                <div class="day-detail-${key} row"></div>
                                        </div>`);
                
                value.forEach(function(element){
                    $(`.day-detail-${key}`).append(`<div class="hour-forecast col">
                                                        <p>${element.weather[0].description}</p>
                                                        <p>Max T.: ${element.main.temp_max}</p>
                                                        <p>${element.dt_txt.split(" ").pop()}</p>
                                                    </div>`)
                })


            }

         }); 
}); // end document.ready