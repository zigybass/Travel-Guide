
   function showCurrentLocation() {
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(displayCurrentPosition);
       } else {
         //x.innerHTML = "Geolocation is not supported by this browser.";
       }
     };
   
     function displayCurrentPosition(position) {

       $.ajax({
        dataType: 'json',
        url: `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/geocode?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
        headers: {
          'user-key': '805d1e0d6b6671767949881ca3264f44'
        }
        ,success: function(response) {

          console.log (response.nearby_restaurants);

          for (i=0;i<response.nearby_restaurants.length;i++){
          $("#content").append(`
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${response.nearby_restaurants[i].restaurant.thumb}" alt="${response.nearby_restaurants[i].restaurant.name}">
            <div class="card-body">
              <h5 class="card-title">${response.nearby_restaurants[i].restaurant.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="${response.nearby_restaurants[i].restaurant.url}" class="btn btn-primary">Visit</a>
            </div>
          </div>
          `);
          }
          $(".card").attr("align","center");
        }
      });
     };

     showCurrentLocation();


