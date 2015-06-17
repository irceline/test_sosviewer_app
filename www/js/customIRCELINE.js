/*function uploadWMS(){
	console.log(L.version);
	//map = L.map('map',Settings.mapOptions);
	//my_ice_map = document.getElementById('map');//((get('map');

	console.log(Map);
	console.log("selected phenomenon: " + this.selectedPhenomenon);

	var pm10_current24 = L.tileLayer.wms("http://wms.irceline.be", {
                layers: 'rio:pm10_actueel24',
                transparent: true,
                format: 'image/png',
                cql_filter: timestring,
                opacity: 0.5,
                visibility: true,
                   units: 'm'
                })//
	console.log(pm10_current24);
	pm10_current24.addTo(Map.map)
}*/

var lastChildPhenomenonId;//= {};
function changeWMS1(phenomenonId,hourComputed,dayComputed ){}

function changeWMS(phenomenonId,hourComputed,dayComputed, boundingbox ){
	if ( (lastChildPhenomenonId == phenomenonId && boundingbox != [])||(typeof initialPhenomenon === 'undefined'&& boundingbox != [])){
		Map.map.fitBounds(boundingbox)
		initialPhenomenon = -1;
	}

	if(lastChildPhenomenonId == {} || lastChildPhenomenonId == phenomenonId){
		console.log('same selection');
		return ;
	}

	/*** Custom IRCEL - CELINE begin ***/
if (phenomenonId == 5){
  // different aggregations of the same pollutant (in this case PM10):
        //this.currentPM10_running24 = new L.LayerGroup().addTo(Map.map);
        this.pm10_current24 = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:pm10_actueel24_1x1',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        }).addTo(Map.map);
        this.pm10_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:pm10_actueel',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: false,
          units: 'm'
        })//.addTo(Map.map);
        pm10_daily_mean = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:pm10_daggemiddelde',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring_day,
          opacity: 0.7,
          visibility: false,
          units: 'm'
        })//.addTo(Map.map);

        this.baseLayers = {
          "current running 24 hour mean PM10": this.pm10_current24,
          "current hourly mean PM10": this.pm10_current,
          "daily mean (yesterday) PM10": this.pm10_daily_mean
        };
        this.myControlLayer = L.control.layers(this.baseLayers, null, {
          position: 'topleft',
          collapsed: true
        }).addTo(Map.map);
}
// remove layerGroup
if (phenomenonId != 5){
	console.log("remove ");
		//Map.map.removeLayer(this.pm10_current24)		//Map.map.removeLayer( this.baseLayers)

		if (Map.map.hasLayer(this.pm10_current24)){
			  Map.map.removeLayer(this.pm10_current24)
			  this.myControlLayer.removeLayer(this.pm10_current24);
			  this.myControlLayer.removeLayer(this.pm10_current);
			  this.myControlLayer.removeLayer(this.pm10_daily_mean);
			  this.myControlLayer.removeFrom(Map.map)
			}
        if (Map.map.hasLayer(this.pm10_current)){
			 Map.map.removeLayer(this.pm10_current)
			  this.myControlLayer.removeLayer(this.pm10_current24);
			  this.myControlLayer.removeLayer(this.pm10_current);
			  this.myControlLayer.removeLayer(this.pm10_daily_mean);
			  this.myControlLayer.removeFrom(Map.map)

			  }
        if (Map.map.hasLayer(this.pm10_daily_mean)){
			  Map.map.removeLayer(this.pm10_daily_mean)
			  this.myControlLayer.removeLayer(this.pm10_current24);
			  this.myControlLayer.removeLayer(this.pm10_current);
			  this.myControlLayer.removeLayer(this.pm10_daily_mean);
			    this.myControlLayer.removeFrom(Map.map)
			}
}
// add single layer
if (phenomenonId == 7){
        this.o3_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:o3_actueel_1x1',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        });
        Map.map.addLayer(this.o3_current);
}

if (phenomenonId != 7 && Map.map.hasLayer(this.o3_current)){
  Map.map.removeLayer(this.o3_current);
}
if (phenomenonId == 8){
        this.no2_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:no2_actueel_1x1',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        });
        Map.map.addLayer(no2_current)
}
if (phenomenonId != 8 && Map.map.hasLayer(this.no2_current)){
  Map.map.removeLayer(this.no2_current);
}
if (phenomenonId == 391){
        this.bc_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:bc_actueel24_1x1',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        }).addTo(Map.map);
}
if (phenomenonId != 391 && Map.map.hasLayer(this.bc_current)){
  Map.map.removeLayer(this.bc_current);
}
if (phenomenonId == 6001){
        this.pm25_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:pm25_actueel24_1x1',
          transparent: true,
          format: 'image/png',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        }).addTo(Map.map);
}
if (phenomenonId != 6001 && Map.map.hasLayer(this.pm25_current)){
  Map.map.removeLayer(this.pm25_current);
}
/*** Custom IRCEL - CELINE end ***/
lastChildPhenomenonId = phenomenonId ;
}
