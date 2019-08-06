function showTargetLocation(lon, lat) {

  $.ajax({
    dataType: 'json',
    url: `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
    headers: {
      'user-key': '805d1e0d6b6671767949881ca3264f44'
    }
    , success: function (response) {

      console.log(response.nearby_restaurants);

      for (i = 0; i < response.nearby_restaurants.length; i++) {
        let image = "https://dummyimage.com/1200x464/6b6b6b/00fff7&text=+Restaurant";
        if (!(response.nearby_restaurants[i].restaurant.featured_image == ""))
          image = response.nearby_restaurants[i].restaurant.featured_image;

        $("#zomatoDiv").append(`
         <div class="card zomato-card text-center">
           <img class="card-img-top" src="${image}" alt="${response.nearby_restaurants[i].restaurant.name}">
           <div class="card-body">
             <h5 class="card-title">${response.nearby_restaurants[i].restaurant.name}</h5>
             <p class="card-text">${response.nearby_restaurants[i].restaurant.location.address}</p>
             <a href="${response.nearby_restaurants[i].restaurant.url}" class="btn btn-primary">Visit</a>
           </div>
           <div class="card-footer">
           <small class="text-muted">${response.nearby_restaurants[i].restaurant.cuisines}</small>
           </div>
         </div>
         `);
        if (i >= 5) break;
      }
      $(".card").attr("align", "center");
    }
  });
};


