GoogleMap
=========

Adding a Google Map to a website and customizing it with Markers and Circles included.

##(1) Adding a Google Map to Your Website

I followed the instructions for adding a Google Map to your Website according to: 
https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map?hl=de

This tutorial will instruct you to:
  * Create a page element on the index.html to target with a <div> and id attribute of map_canvas setting the width/height
  * Load the Google Maps API
  * Create and configure the map via the initialise function in the javascript file
  * Create a new Google Maps object (used to pass into markers and circles)
  * Options for the map include - center, zoom and type

##(2) Customizing Google Maps

I then followed instructions for customizing Google Maps:
https://developers.google.com/maps/tutorials/customizing/?hl=de

##(3) Create Markers and Circles

Closely followed by this tutorial:
https://developers.google.com/maps/tutorials/customizing/custom-markers?hl=de


Note that here the instance of Map Object created is added as the map property for the Marker Object created. I expected
that the marker object would be added to the map but as the map object is added as a marker property the assignment to a 
variable is not necessary and the is variable never used in the example code in this tutorial.


The script later evolves to declare a stationmap array that contains properties for both marker and circle looping
through and grabbing the properties required for either marker or circle and then instantiating each in turn.


Examples prior to the devised loop to create both marker and circles illustrated sequential marker/circle instantiation 
assigned to variables not used.


![alt text](http://docs.rhondaimpey.com/img/googlemap.jpg "Google Maps")

  

