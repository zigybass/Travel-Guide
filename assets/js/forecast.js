$(document).ready(function(){
        const apiKeyWeather = "abb73e61ebb1b7746ebb817ea591d018";
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&units=imperial&appid=${apiKeyWeather}`;
        const weekForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Santiago,cl&units=imperial&appid=${apiKeyWeather}`;

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
                                            <h3>${dateString} </h3>
                                            <div class="day-detail-${key} row"></div>
                                            <canvas id="chart${key}" width="500px" height="100px"></canvas>
                                        </div>`
                                     );
                const hoursPerDay = []; // Labels for Chart
                const tempPerHour = []; // Data for Chart


                value.forEach(function(element){
                    const date = new Date(element.dt * 1000); 
                    const hour = date.getHours() > 12 ? date.getHours() - 12 + "pm" : date.getHours() + "am";
                    $(`.day-detail-${key}`).append(`<div class="hour-forecast col">
                                                        <p>${element.weather[0].description}</p>
                                                        <p>Max T.: ${element.main.temp_max}</p>
                                                        <p>${hour}</p>
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
        
        
}); // end document.ready