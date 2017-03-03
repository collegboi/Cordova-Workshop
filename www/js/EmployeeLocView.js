var EmployeeLocView = function () {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
       // var div = $('<div id="map_canvas" style="width:100%;height:400px;"></div>');
       // console.log(div);
       // map = plugin.google.maps.Map.getMap(div);
       // $('.content', this.$el).html(div);
        return this;
    };

    this.initialize();

}

// var EmployeeLocView = function(employee) {

//     // var map;
//     // var jsonLoc;

//     // var curIcon = L.ExtraMarkers.icon({
//     //     icon: 'fa-crosshairs',
//     //     iconColor: 'white',
//     //     markerColor: 'blue',
//     //     shape: 'square',
//     //     prefix: 'fa'
//     // });


//     this.initialize = function() {
//         this.$el = $('<div/>');
//     };

//     this.render = function() {
//         this.$el.html(this.template(employee));
//         return this;
//     };

//     // this.setMapToCurrentLocation = function() {
//     //     console.log("In setMapToCurrentLocation.");
            
//     //     var myLatLon = L.latLng(52.32396135, -6.42415696);
//     //     L.marker(myLatLon, {icon: curIcon}).addTo(map);
//     //     map.flyTo(myLatLon, 15);

//     //     myPos = new myGeoPosition(pos);
//     //     jsonLoc = JSON.stringify(myPos);
//     // };

//     //  thid.updatePosition =function() {
//     //     console.log("In updatePosition.");

//     //         var myPos = JSON.parse(jsonLoc);
//     //         $.ajax({
//     //             type: "PATCH",
//     //             headers: {"Authorization": localStorage.authtoken},
//     //             url: HOST + URLS["updateposition"],
//     //             data: {
//     //                 lat: myPos.coords.latitude,
//     //                 lon: myPos.coords.longitude
//     //             }
//     //         }).done(function (data, status, xhr) {
//     //             showOkAlert("Position Updated");
//     //         }).fail(function (xhr, status, error) {
//     //             var message = "Position Update Failed\n";
//     //             if ((!xhr.status) && (!navigator.onLine)) {
//     //                 message += "Bad Internet Connection\n";
//     //             }
//     //             message += "Status: " + xhr.status + " " + xhr.responseText;
//     //             showOkAlert(message);
//     //         }).always(function () {
//     //             $.mobile.navigate("#map-page");
//     //     });
//     // }

//     this.initialize();
// }
