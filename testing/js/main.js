
proj4.defs("urn:ogc:def:crs:EPSG::28992", "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defsa");
var map = L.map('map').setView([52.22107, 5.218506], 8);

////////////////////////////////////////////////////////////////
//making map layers 
//diefstallaag

console.log(dataFile.features[53].properties);

var diefstalLayer = L.Proj.geoJson(dataFile, {
    onEachFeature: function (feature, layer) {
        diefstal_value = "niet beschikbaar";
        if(Math.round(feature.properties.diefstalGegevens_inwoners_per_diefstal * 10) / 10 > 0 ){
            diefstal_value = Math.round(feature.properties.diefstalGegevens_inwoners_per_diefstal * 10) / 10
        }
        layer.bindPopup(
                "<h1 class='popup__heading'>Gemeente " +feature.properties.GM_NAAM + "</h1>"
             +  "<p class='popup__paragraph'>Inwoners per diefstal - " + diefstal_value + "</p>"
             +  "<p class='popup__paragraph'>basisscholen binnen 3 km - " + Math.floor(feature.properties.voorzieningen_aantal_basisscholen_binnen_3_km) + "</p>"
             +  "<p class='popup__paragraph'>afstand tot huisarts - " + feature.properties.voorzieningen_afstand_tot_huisarts_km + "</p>"
            )
    },
    style: function(feature) {
        switch(true) {
            case (feature.properties.diefstalGegevens_inwoners_per_diefstal >= 66.4):
                return {fillColor: 'red',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'};
            case (feature.properties.diefstalGegevens_inwoners_per_diefstal > 0):
                return {fillColor: 'lime',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'};
            default:
                return {fillColor: 'white',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'};
          }
        
    }
});


//currentlayer and add to map

currentLayer = diefstalLayer;

currentLayer.addTo(map);


////////////////////////////////////////////////////////////////
//adding base map

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmllbHNkb2JiZWxhYXIiLCJhIjoiY2wxMjN4anhjMDJvYjNlcGR3ZDVwN2RhbiJ9.M3p510hqjAir3XSYRvPqsQ'
}).addTo(map);



////////////////////////////////////////////////////////////////
//filtering

var slider = document.getElementById('inwoner_slider');
var sliderP = document.getElementById('slider_P');
var sliderValue = slider.value;

var textbox = document.getElementById('gemeente_Box');

var gemeentesShowing = 'all';

var features_list = [];  

//inwoners filter function

slider.addEventListener('change', function(){
    sliderValue = slider.value;
    sliderP.innerHTML = sliderValue
    filterFunction()
})

//zoek een gemeente filter function

const zoekGemeente = () =>{
    gemeentesShowing = gemeente_Box.value;
    filterFunction()
}

const clearGemeente = () =>{
    gemeentesShowing = 'all'
    sliderValue = 872757;
    slider.value = sliderValue
    sliderP.innerHTML = sliderValue
    filterFunction()
    
}

//global filter function
const filterFunction = () => {
    for(f of features_list){
        currentLayer.addLayer(f);
    }

    features_list = [];


    var gemeenteFound = false;
    if(gemeentesShowing != 'all'){
        currentLayer.eachLayer(function(layer){
            if(layer.feature.properties.GM_NAAM != gemeentesShowing){
                features_list.push(layer);
                currentLayer.removeLayer(layer);
            }else{
                gemeenteFound = true;
                gemeente_Box.style.color = 'black';
            }
        });
    }
    if(!gemeenteFound){
        if(gemeentesShowing != 'all'){
            gemeente_Box.value = "Niet gevonden";
            gemeente_Box.style.color = 'red';
        }
        for(f of features_list){
            currentLayer.addLayer(f);
        }
        currentLayer.eachLayer(function(layer) {
            if(layer.feature.properties.AANT_INW > sliderValue){
                features_list.push(layer);
                currentLayer.removeLayer(layer);
            }
        })
    }
}



////////////////////////////////////////////////////////////////
//changing layers


var checkbox_diefstal = document.getElementById('diefstal_radio');
