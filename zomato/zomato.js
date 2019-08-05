
   function getLocation() {
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
       } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
       }
     };
   
     function showPosition(position) {
       console.log("Latitude: " + position.coords.latitude + 
       "Longitude " + position.coords.longitude) ;


       $.ajax({
        dataType: 'json',
        url: "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/geocode?lat=33.5826218&lon=-84.58292879999999",
        headers: {
          'user-key': '805d1e0d6b6671767949881ca3264f44'
        }
        ,success: function(response) {
          console.log(response);
          //console.log(status);
        }
      });
     };


     getLocation();


