
//fix
// diefstal kleuren
// diefstal legenda
// legenda spelling
// legenda school



proj4.defs("urn:ogc:def:crs:EPSG::28992", "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defsa");
var map = L.map('map').setView([52.22107, 5.218506], 8);

var features_list = [];  

////////////////////////////////////////////////////////////////
//making map layers 
//diefstallaag

console.log(dataFile.features[53].properties);

var diefstalLayer = L.Proj.geoJson(dataFile, {
    onEachFeature: function (feature, layer) {
        diefstal_value = "niet beschikbaar";
        if(Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10 > 0 ){
            diefstal_value = Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10
        }
        layer.bindPopup(
                "<h1 class='popup__heading'>Gemeente " +feature.properties.GM_NAAM + "</h1>"
             +  "<p class='popup__paragraph'>Aantal diefstallen per 1000 inwoners - " + diefstal_value + "</p>"
             +  "<p class='popup__paragraph'>Gemiddelde afstand tot een kinderdagverblijf - " + Math.floor(feature.properties.voorzieningen_aantal_basisscholen_binnen_3_km) + " KM</p>"
             +  "<p class='popup__paragraph'>Gemiddelde afstand tot een huisarts - " + feature.properties.voorzieningen_afstand_tot_huisarts_km + " KM</p>"
            )
        layer.on('mouseover', function () {
            this.setStyle({
                'fillOpacity': '0.2'
            });
            });
            layer.on('mouseout', function () {
            this.setStyle({
                'fillOpacity': '0.9'
            });
            });
    },
    style: function(feature) {
        switch(true) {
            case (feature.properties.diefstalGegevens_diefstal_per_1000_inwoners >= 30.1):
                return {fillColor: '#006837',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.diefstalGegevens_diefstal_per_1000_inwoners >= 22.6):
                return {fillColor: '#31a354',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.diefstalGegevens_diefstal_per_1000_inwoners >= 18.8):
                return {fillColor: '#78c679',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.diefstalGegevens_diefstal_per_1000_inwoners >= 15.1):
                return {fillColor: '#c2e699',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.diefstalGegevens_diefstal_per_1000_inwoners >= 6.7):
                return {fillColor: '#ffffcc',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            default:
                return {fillColor: 'white',
                weight: 1,
                fillOpacity: 0.3,
                color: 'black'}
          }
        
    }
});

//schoolen laag
var schoolLayer = L.Proj.geoJson(dataFile, {
    onEachFeature: function (feature, layer) {
        diefstal_value = "niet beschikbaar";
        if(Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10 > 0 ){
            diefstal_value = Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10
        }
        layer.bindPopup(
            "<h1 class='popup__heading'>Gemeente " +feature.properties.GM_NAAM + "</h1>"
         +  "<p class='popup__paragraph'>Aantal diefstallen per 1000 inwoners - " + diefstal_value + "</p>"
         +  "<p class='popup__paragraph'>Gemiddelde afstand tot een kinderdagverblijf - " + Math.floor(feature.properties.voorzieningen_aantal_basisscholen_binnen_3_km) + " KM</p>"
         +  "<p class='popup__paragraph'>Gemiddelde afstand tot een huisarts - " + feature.properties.voorzieningen_afstand_tot_huisarts_km + " KM</p>"
        )
        layer.on('mouseover', function () {
            this.setStyle({
                'fillOpacity': '0.2'
            });
            });
            layer.on('mouseout', function () {
            this.setStyle({
                'fillOpacity': '0.9'
            });
            });
    },
    style: function(feature) {
        switch(true) {
            case (feature.properties.voorzieningen_afstand_tot_kinderdagverblijf_km > 0.9):
                return {fillColor: '#ffffcc',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.voorzieningen_afstand_tot_kinderdagverblijf_km >= 0.8):
                return {fillColor: '#bae4bc',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.voorzieningen_afstand_tot_kinderdagverblijf_km >= 0.7):
                return {fillColor: '#7bccc4',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.voorzieningen_afstand_tot_kinderdagverblijf_km >= 0.6):
                return {fillColor: '#43a2ca',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            case (feature.properties.voorzieningen_afstand_tot_kinderdagverblijf_km >= 0.3):
                return {fillColor: '#0868ac',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
            default:
                return {fillColor: 'white',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
          }
    }
});


//zorg laag
var zorgLayer = L.Proj.geoJson(dataFile, {
    onEachFeature: function (feature, layer) {
        diefstal_value = "niet beschikbaar";
        if(Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10 > 0 ){
            diefstal_value = Math.round(feature.properties.diefstalGegevens_diefstal_per_1000_inwoners * 10) / 10
        }
        layer.bindPopup(
            "<h1 class='popup__heading'>Gemeente " +feature.properties.GM_NAAM + "</h1>"
         +  "<p class='popup__paragraph'>Aantal diefstallen per 1000 inwoners - " + diefstal_value + "</p>"
         +  "<p class='popup__paragraph'>Gemiddelde afstand tot een kinderdagverblijf - " + Math.floor(feature.properties.voorzieningen_aantal_basisscholen_binnen_3_km) + " KM</p>"
         +  "<p class='popup__paragraph'>Gemiddelde afstand tot een huisarts - " + feature.properties.voorzieningen_afstand_tot_huisarts_km + " KM</p>"
        )
        layer.on('mouseover', function () {
            this.setStyle({
                'fillOpacity': '0.2'
            });
            });
            layer.on('mouseout', function () {
            this.setStyle({
                'fillOpacity': '0.9'
            });
            });
    },
    style: function(feature) {
        switch(true) {
            case (feature.properties.voorzieningen_afstand_tot_huisarts_km > 2.32):
                return {fillColor: '#feebe2',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'}
            case (feature.properties.voorzieningen_afstand_tot_huisarts_km >= 1.84):
                return {fillColor: '#fbb4b9',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'}
            case (feature.properties.voorzieningen_afstand_tot_huisarts_km >= 1.36):
                return {fillColor: '#f768a1',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'}
            case (feature.properties.voorzieningen_afstand_tot_huisarts_km >= 0.88):
                return {fillColor: '#c51b8a',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'}
            case (feature.properties.voorzieningen_afstand_tot_huisarts_km >= 0.4):
                return {fillColor: '#7a0177',
                weight: 1,
                fillOpacity: 0.9,
                color: 'white'}
            default:
                return {fillColor: 'white',
                weight: 1,
                fillOpacity: 0.9,
                color: 'black'}
          }
    }
});

//currentlayer and add to map

currentLayer = diefstalLayer;

currentLayer.addTo(map);


/////////////////////////////////////////////////////////////////
//legendLayer

function diefstalGetColor(v) {
    return v > 30 ? '#006837' :
           v > 22.6  ? '#31a354' :
           v > 18.8  ? '#78c679' :
           v > 15.1  ? '#c2e699' :
           v > 6.7   ? '#ffffcc' :
                      'white';
}
var diefstalLegend = L.control({
  position: 'bottomright'
});
diefstalLegend.onAdd = function() {
    var div = L.DomUtil.create('div', 'infolegend');

    var grades = [6.7, 15.1, 18.8, 22.6, 30];
    var labels = [];
    var from, to;
    labels.push('<h2 class="legendHeader" ">Aantal diefstallen per 1000 inwoners</h2>')
  for (var i = 0; i < grades.length - 1; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<section class="legendColor" style="background:' + diefstalGetColor(from + 1) + '"></section> ' + '<p class="legendP">'+ from + " - " + to  +'</p>');
  }
  labels.push('<section  class="legendColor" style="background:' + diefstalGetColor(grades[4]+1) + '"></section> <p class="legendP"> ' + grades[4] + '+ </p>');
  labels.push('<section class="legendColor" style="background:' + diefstalGetColor(1) + '"></section> ' + ' <p class="legendP">Geen data</p>');
  div.innerHTML = labels.join('<br>');
  return div;
};


function schoollGetColor(v) {
    return v == 0.9 ? '#ffffcc' :
           v == 0.8  ? '#bae4bc' :
           v == 0.7  ? '#7bccc4' :
           v == 0.6  ? '#43a2ca' :
           v == 0.3   ? '#0868ac' :
                      'white';
}
var schoolLegend = L.control({
  position: 'bottomright'
});

schoolLegend.onAdd = function() {
    var div = L.DomUtil.create('div', 'infolegend');

    var grades = [0.3, 0.6, 0.7, 0.8, 0.9];
    var labels = [];
    var from, to;
    labels.push('<h2 class="legendHeader" ">Gemiddelde afstand tot een kinderdagverblijf (km)</h2>')
  for (var i = 0; i < grades.length - 1; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<section class="legendColor" style="background:' + schoollGetColor(from) + '"></section> ' + '<p class="legendP">'+ from + " - " + to  +'</p>');
  }
  labels.push('<section  class="legendColor" style="background:' + schoollGetColor(grades[4]) + '"></section> <p class="legendP"> ' + grades[4] + '+ </p>');
  labels.push('<section class="legendColor" style="background:' + schoollGetColor(1) + '"></section> ' + ' <p class="legendP">Geen data</p>');
  div.innerHTML = labels.join('<br>');
  return div;
};

function zorgGetColor(v) {
    
    return v == 2.32 ? '#feebe2' :
           v == 1.84  ? '#fbb4b9' :
           v == 1.36  ? '#f768a1' :
           v == 0.88  ? '#c51b8a' :
           v == 0.4   ? '#7a0177' :
                      'white';
}
var zorgLegend = L.control({
  position: 'bottomright'
});

zorgLegend.onAdd = function() {
    var div = L.DomUtil.create('div', 'infolegend');

    var grades = [0.4, 0.88, 1.36, 1.84, 2.32];
    var labels = [];
    var from, to;
    labels.push('<h2 class="legendHeader" ">Gemiddelde afstand tot een huisarts (km)</h2>')
  for (var i = 0; i < grades.length - 1; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<section class="legendColor" style="background:' + zorgGetColor(from) + '"></section> ' + '<p class="legendP">'+ from + " - " + to  +'</p>');
  }
  labels.push('<section  class="legendColor" style="background:' + zorgGetColor(grades[4]) + '"></section> <p class="legendP"> ' + grades[4] + '+ </p>');
  labels.push('<section class="legendColor" style="background:' + zorgGetColor(1) + '"></section> ' + ' <p class="legendP">Geen data</p>');
  div.innerHTML = labels.join('<br>');
  return div;
};


currentLegenda = diefstalLegend;
currentLegenda.addTo(map);

////////////////////////////////////////////////////////////////
//changing layers


//getting layer input
var diefstalRadioDot = document.getElementById('diefstal_radio');
var schoolRadioDot = document.getElementById('basischool_radio');
var zorgRadioDot = document.getElementById('huisarts_radio');


//changing layer function
const layerHandler = (l) => {
    switch (l) {
        case 1:
            if(diefstalRadioDot.checked){
                for(f of features_list){
                    currentLayer.addLayer(f);
                }
                
                map.removeLayer(currentLayer);
                currentLayer = diefstalLayer;
                currentLayer.addTo(map);

                map.removeControl(currentLegenda);
                currentLegenda = diefstalLegend;
                currentLegenda.addTo(map);
                
                filterFunction()
            }
            break;
        case 2:
            if(schoolRadioDot.checked){
                for(f of features_list){
                    currentLayer.addLayer(f);
                }

                map.removeLayer(currentLayer);
                currentLayer = schoolLayer;
                currentLayer.addTo(map);
                
                map.removeControl(currentLegenda);
                currentLegenda = schoolLegend;
                currentLegenda.addTo(map);

                filterFunction()
            }
            break;
        case 3:
            if(zorgRadioDot.checked){
                for(f of features_list){
                    currentLayer.addLayer(f);
                }
                
                map.removeLayer(currentLayer);
                currentLayer = zorgLayer;
                currentLayer.addTo(map);
                
                map.removeControl(currentLegenda);
                currentLegenda = zorgLegend;
                currentLegenda.addTo(map);

                filterFunction()
            }
            break;
    }
}



////////////////////////////////////////////////////////////////
//adding base map

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
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



var checkbox_diefstal = document.getElementById('diefstal_radio');



const clearMenu = () =>{
    for(let item of document.getElementsByClassName("menuclear")){
        item.style.display = "none";
    }
}