var crs = new L.Proj.CRS('EPSG:28992',
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

console.log(diefstal.features[3]);
map.setView([155000 , 463000], 15);
var geojson = L.geoJSON(diefstal).addTo(map);