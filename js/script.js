$(document).ready(function () {

    //https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
    //https://developers.google.com/maps/tutorials/customizing/styling-the-base-map
    //https://developers.google.com/maps/tutorials/customizing/custom-markers
    //https://developers.google.com/maps/documentation/javascript/examples/circle-simple


    //Create and configure the map
    function initialize() {

        var map_div = document.getElementById('map');

        var map_options = {
            //center is a Google Maps LatLng object that tells the API where to center the map
            //Latitude and Longitude can be obtained either: from the URL in Google maps or 
            //right click the location on Google maps and select 'What's here' which will bring up the LatLng in the description
            center: new google.maps.LatLng(51.508809, -0.105663),
            //zoom is a number between 0 (farthest) and 22 that sets the zoom level of the map.
            zoom: 14,
            //mapTypeId is used to specify what type of map to use. Your choices are ROADMAP, SATELLITE, HYBRID, or TERRAIN.
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            //navigationControl: false,
            //mapTypeControl: false,
            //scaleControl: false,
            zoomControl: true,
            panControl: true,
            draggable: true,
            disableDoubleClickZoom: true
        }
        //https://developers.google.com/maps/documentation/javascript/styling
        //Map features and stylers are combined into a style array, which is passed to the default map's MapOptions object, or to the StyledMapType constructor
        //Styled Maps accept an array of map stylers which define the colors, visibility, and weight of featureTypes on the map.
        //Stylers are color and visibility properties that can be applied to map features. 
        //They define the display color through a combination of hue, color, and lightness/gamma values.
        var styles = [{
            stylers: [                  // Greyscale
                {hue: "#ffffff" },
                { saturation: -100 }
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }];

        //create a new google maps object
        //the map object constructor takes two arguments:
        //- reference to the div map will be loaded into and options for the map
        var map = new google.maps.Map(map_div, map_options);

        map.set('styles', styles);

        //**** Markers ****

        //Specify the icon option on MarkerOptions to change the marker’s icon.
        //The icon option can be either a string (the URL to the marker icon), or an Icon object. 
        var marker_charing = new google.maps.Marker({
            position: new google.maps.LatLng(51.508168, -0.124846),
            icon: 'img/map-charingcross.png',
            map: map,
            title: 'London Charing Cross'
        });

        var marker_waterloo_east = new google.maps.Marker({
            position: new google.maps.LatLng(51.504076, -0.108873),
            icon: 'img/map-waterlooeast.png',
            map: map,
            title: 'Waterloo East'
        });

        var marker_cannon = new google.maps.Marker({
            position: new google.maps.LatLng(51.511382, -0.090267),
            icon: 'img/map-cannonstreet.png',
            map: map,
            title: 'Cannon Street'
        });

        var marker_london_bridge = new google.maps.Marker({
            position: new google.maps.LatLng(51.505109, -0.086062),
            icon: 'img/map-londonbridge.png',
            map: map,
            title: 'London Bridge'
        });

        //**** Circles ****

        var circle_charing = new google.maps.Circle({
            strokeColor: "#BE6D45",
            strokeOpacity: 0.4,
            strokeWeight: 0,
            fillColor: "#BE6D45",
            fillOpacity: 0.4,
            map: map,
            center: new google.maps.LatLng(51.508168, -0.124846),
            radius: 1000 // radius in metres
        });

        var circle_waterloo_east = new google.maps.Circle({
            strokeColor: '#BE6D45',
            strokeOpacity: 0.4,
            strokeWeight: 0,
            fillColor: '#BE6D45',
            fillOpacity: 0.4,
            map: map,
            center: new google.maps.LatLng(51.504076, -0.108873),
            radius: 1000 // radius in metres
        });

        var circle_cannon = new google.maps.Circle({
            strokeColor: "#BE6D45",
            strokeOpacity: 0.4,
            strokeWeight: 0,
            fillColor: "#BE6D45",
            fillOpacity: 0.4,
            map: map,
            center: new google.maps.LatLng(51.511382, -0.090267),
            radius: 1000 // radius in metres
        });

        var circle_london_bridge = new google.maps.Circle({
            strokeColor: "#BE6D45",
            strokeOpacity: 0.4,
            strokeWeight: 0,
            fillColor: '#BE6D45',
            fillOpacity: 0.4,
            map: map,
            center: new google.maps.LatLng(51.505109, -0.086062),
            radius: 1000 // radius in metres
        });


    }

    //Add an event listener to the window object that will call the initialize function once the page has loaded.
    //Calling initialize before the page has finished loading will cause problems, since the div it's looking for may 
    //not have been created yet; this function waits until the HTML elements on the page have been created before calling initialize.
    google.maps.event.addDomListener(window, 'load', initialize);

});

            
