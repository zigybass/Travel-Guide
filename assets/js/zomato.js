
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
          $("#zomatoDiv").empty;
          for (i=0;i<response.nearby_restaurants.length;i++){
            let image="https://dummyimage.com/200x200/6b6b6b/00fff7&text=+Restaurant";
            if (!(response.nearby_restaurants[i].restaurant.thumb==""))
              image=response.nearby_restaurants[i].restaurant.thumb;
          $("#zomatoDiv").append(`
          
          <div class="card zomato-card text-center">
            <img class="card-img-top" src="${image}" alt="${response.nearby_restaurants[i].restaurant.name}">
            <div class="card-body">
              <h5 class="card-title">${response.nearby_restaurants[i].restaurant.name}</h5>
              <p class="card-text">${response.nearby_restaurants[i].restaurant.cuisines}</p>
              <a href="${response.nearby_restaurants[i].restaurant.url}" class="btn btn-primary">Visit</a>
            </div>
          </div>
          `);
          if (i>=4)break;
          }
          $(".card").attr("align","center");
        }
      });
     };

     function showTargetLocation(lon,lat) {

      $.ajax({
       dataType: 'json',
       url: `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
       headers: {
         'user-key': '805d1e0d6b6671767949881ca3264f44'
       }
       ,success: function(response) {

         console.log (response.nearby_restaurants);

         $("#zomatoDiv").empty;

         for (i=0;i<response.nearby_restaurants.length;i++){
           let image="https://dummyimage.com/200x200/6b6b6b/00fff7&text=+Restaurant";
           if (!(response.nearby_restaurants[i].restaurant.thumb==""))
             image=response.nearby_restaurants[i].restaurant.thumb;
         
         $("#zomatoDiv").append(`
         <div class="card zomato-card text-center">
           <img class="card-img-top" src="${image}" alt="${response.nearby_restaurants[i].restaurant.name}">
           <div class="card-body">
             <h5 class="card-title">${response.nearby_restaurants[i].restaurant.name}</h5>
             <p class="card-text">${response.nearby_restaurants[i].restaurant.cuisines}</p>
             <a href="${response.nearby_restaurants[i].restaurant.url}" class="btn btn-primary">Visit</a>
           </div>
         </div>
         `);
         if (i>=4)break;
         }
         $(".card").attr("align","center");
       }
     });
    };


