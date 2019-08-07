$(document).ready(function(){

        console.log(window.location.search)
        const url = window.location;
        const params = new URLSearchParams(url.search);
        const cityName = params.get("city");
        const countryCodel = params.get("countryCode");
        let units = "imperial";

        console.log(window.location.search)
        console.log(params);
        const apiKeyWeather = "abb73e61ebb1b7746ebb817ea591d018";
        
        
        forecast();

        $("#celcius-forecast").click(function(e){
            units = "metric";
            $("#forecast").empty();
            forecast();
            $("#celcius-forecast").addClass("active");       
            $("#fahrenheit-forecast").removeClass("active");   
        })

        $("#fahrenheit-forecast").click(function(e){
            units = "imperial";
            $("#forecast").empty();
            forecast();
            console.log("Clicked!")
            $("#fahrenheit-forecast").addClass("active");       
            $("#celcius-forecast").removeClass("active"); 
        })

        function forecast(){
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCodel}&units=${units}&appid=${apiKeyWeather}`;
            const weekForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCodel}&units=${units}&appid=${apiKeyWeather}`;
            $.ajax({
                url: weatherURL,
                method: "GET",
             }).then(function(response){
                 console.log(response);
                 console.log(weatherURL);
                 $("#city-name").text(`${response.name}, ${countryCodel} `);
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
     
                 // Create an array of the information per day
                 forecast.list.forEach(function(element) {
                    const fullDate = new Date(element.dt * 1000); 
                    const eachDay = fullDate.getDate();
                     if (!days[eachDay]){
                         days[eachDay] = [element]
                     } else {
                         days[eachDay].push(element);
                     }
                 });
     
     
                 for (let [key, value] of Object.entries(days)) {
                     const date = new Date(value[0].dt * 1000); 
                     const dateString = date.toDateString()
                     $("#forecast").append(` <div class="day col-12">
                                                 <div class="container">
                                                     <h3>${dateString} </h3>
                                                     <div class="info-container">
                                                         <div class="day-detail-${key} row"></div>
                                                         <div class="chartContainer">
                                                             <canvas id="chart${key}"></canvas>
                                                         </div>
                                                         <div class="d-block d-sm-none arrows-icon"><i class="fas fa-arrows-alt-h"></i><div>
                                                     </div>
                                                 </div>    
                                             </div>`
                                          );
                     const hoursPerDay = []; // Labels for Chart
                     const tempPerHour = []; // Data for Chart
     
     
                     value.forEach(function(element){
                         const date = new Date(element.dt * 1000); 
                         const hour = date.getHours() > 12 ? date.getHours() - 12 + "pm" : date.getHours() + "am";
                         $(`.day-detail-${key}`).append(`<div class="hour-forecast col">
                                                             <p>${element.weather[0].description}</p>
                                                             <img src="./assets/images/forecast/${element.weather[0].icon}.svg" alt="">
                                                             <p>Max T.<span>${element.main.temp_max}</span></p>                        
                                                         </div>`)
                         hoursPerDay.push(hour);                                
                         tempPerHour.push(element.main.temp_max);                                
                     });
     
                     console.log(hoursPerDay);
                     console.log(tempPerHour);
     
                     const ctx = $(`#chart${key}`);
                     const chart3 = new Chart(ctx, {
                         type: 'line',
                         data: {
                             labels: hoursPerDay,
                             datasets: [{
                                 label: null,
                                 data: tempPerHour,
                                 backgroundColor: 'rgba(66, 206, 201, 0.2)',
                                 borderColor: 'rgba(66, 206, 201, 1)',
                                 borderWidth: 1
                             }]
                         },
                         options: {
                             aspectRatio: 5,
                             legend:{
                                 display: false
                             },
                             scales: {
                                 yAxes: [{
                                     ticks: {
                                         beginAtZero: true,
                                         display: false
                                     },
                                     gridLines: {
                                         display: false,
                                         zeroLineColor: 'rgba(255,255,255,0)',
                                         zeroLineWidth: 0	
                                     }
                                 }],
                                
                                
                             }
                         }
                     });
     
     
                 }
     
              }); // end ajax
        }
        
        
}); // end document.ready