var crs = new L.Proj.CRS('EPSG:3006',
	'+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
	{
		resolutions: [
			8192, 4096, 2048, 1024, 512, 256, 128,
			64, 32, 16, 8, 4, 2, 1, 0.5
		],
		origin: [0, 0]
	}),
	map = new L.Map('map', {
		crs: crs,
		continuousWorld: true,
		worldCopyJump: false
	});

//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoibmllbHNkb2JiZWxhYXIiLCJhIjoiY2wxMjN4anhjMDJvYjNlcGR3ZDVwN2RhbiJ9.M3p510hqjAir3XSYRvPqsQ'
// }).addTo(map);

L.tileLayer('http://api.geosition.com/tile/osm-bright-3006/{z}/{x}/{y}.png', {
	maxZoom: 14,
	minZoom: 0,
	continuousWorld: true,
	attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, Imagery &copy; 2013 <a href="http://www.kartena.se/">Kartena</a>'
}).addTo(map);

map.setView([57.704, 11.965], 13);
