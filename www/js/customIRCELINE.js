var lastChildPhenomenonId;//= {};
function changeWMS(phenomenonId,hourComputed,dayComputed,boundingbox){
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	pane: 'tilePane',
	zIndex: -9999
}).addTo(Map.map);
	if ( (lastChildPhenomenonId == phenomenonId && boundingbox != [])||(typeof initialPhenomenon === 'undefined'&& boundingbox != [])){
		Map.map.fitBounds(boundingbox)
		initialPhenomenon = -1;
	}
	if(lastChildPhenomenonId == {} || lastChildPhenomenonId == phenomenonId){
		console.log('same selection');
		return ;
	}
if (phenomenonId == 5){
  // different aggregations of the same pollutant (in this case PM10):
        this.pm10_current24 = L.tileLayer.wms("http://geo.irceline.be/wms", {
			layers: 'rio:pm10_actueel24',
			transparent: true,
			format: 'image/jpeg',
			cql_filter: timestring,
			opacity: 0.7,
			projection: 'EPSG:4326',
			pane: 'tilePane',
			zIndex: -9998,
			units: 'm'
        }).addTo(Map.map);
        this.pm10_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
			layers: 'rio:pm10_actueel',
			transparent: true,
			format: 'image/png',
			cql_filter: timestring,
			opacity: 0.7,
			visibility: true,
			pane: 'tilePane',
			zIndex: -9998,
			projection: 'EPSG:4326',
          units: 'm'
        });
        this.pm10_daily_mean = L.tileLayer.wms("http://geo.irceline.be/wms", {
			layers: 'rio:pm10_daggemiddelde',
			transparent: true,
			format: 'image/png',
			cql_filter: timestring_day,
			opacity: 0.7,
			visibility: true,
			pane: 'tilePane',
			zIndex: -9998,
			projection: 'EPSG:4326',
          units: 'm'
        });
			// the forecast layers
			this.imageUrlPM10day0 = 'http://www.irceline.be/air/forecast/map/air_quality_PM10ovl_day0.png';
			this.imageUrlPM10day1 = 'http://www.irceline.be/air/forecast/map/air_quality_PM10ovl_day1.png';
			this.imageUrlPM10day2 = 'http://www.irceline.be/air/forecast/map/air_quality_PM10ovl_day2.png';
			this.imageBounds = [[49.42970232967725, 2.2959900496768988], [51.54563342675961, 7.546266537830604]];
			this.day0 = L.imageOverlay(imageUrlPM10day0, imageBounds, {transparent: true, opacity: 0.7, pane: 'tilePane', zIndex: -9998, projection: 'EPSG:4326', units: 'm'});
			this.day1 = L.imageOverlay(imageUrlPM10day1, imageBounds, {transparent: true, opacity: 0.7, pane: 'tilePane', zIndex: -9998, projection: 'EPSG:4326', units: 'm'});
			this.day2 = L.imageOverlay(imageUrlPM10day2, imageBounds, {transparent: true, opacity: 0.7, pane: 'tilePane', zIndex: -9998, projection: 'EPSG:4326', units: 'm'});
			this.baseLayers = {
			"current running 24 hour mean PM10": this.pm10_current24,
			"current hourly mean PM10": this.pm10_current,
			"daily mean (yesterday) PM10": this.pm10_daily_mean,
			"forecast - daily mean today": day0,
			"forecast - daily mean tomorrow": day1,
			"forecast - daily mean in 2 days": day2
        };
        this.pm10ControlLayer = L.control.layers(this.baseLayers, null, {
          position: 'bottomright',
          collapsed: true
        }).addTo(Map.map);
}
if (phenomenonId != 5){
	console.log("remove layers");
		if (Map.map.hasLayer(this.pm10_current24)){
				Map.map.removeLayer(this.pm10_current24)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
			}
      if (Map.map.hasLayer(this.pm10_current)){
				Map.map.removeLayer(this.pm10_current)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
			}
      if (Map.map.hasLayer(this.pm10_daily_mean)){
				Map.map.removeLayer(this.pm10_daily_mean)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
		  }
			if (Map.map.hasLayer(this.day0)){
				Map.map.removeLayer(this.day0)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
			}
			if (Map.map.hasLayer(this.day1)){
				Map.map.removeLayer(this.day1)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
			}
			if (Map.map.hasLayer(this.day2)){
				Map.map.removeLayer(this.day2)
				this.pm10ControlLayer.removeLayer(this.pm10_current24);
				this.pm10ControlLayer.removeLayer(this.pm10_current);
				this.pm10ControlLayer.removeLayer(this.pm10_daily_mean);
				this.pm10ControlLayer.removeLayer(this.day0);
				this.pm10ControlLayer.removeLayer(this.day1);
				this.pm10ControlLayer.removeLayer(this.day2);
				Map.map.removeControl(pm10ControlLayer)
			}
}
if (phenomenonId == 7){
        this.o3_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rioifdm:anmean_2013_O3',
          transparent: true,
          format: 'image/png8',
          // cql_filter: timestring,
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
          layers: 'rio:no2_actueel',
          transparent: true,
          format: 'image/tiff',
          cql_filter: timestring,
          opacity: 0.7,
          visibility: true,
          units: 'm'
        });
        Map.map.addLayer(this.no2_current);
}
if (phenomenonId != 8 && Map.map.hasLayer(this.no2_current)){
  Map.map.removeLayer(this.no2_current);
}
if (phenomenonId == 391){
        this.bc_current = L.tileLayer.wms("http://geo.irceline.be/wms", {
          layers: 'rio:bc_actueel',
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
          layers: 'rio:pm25_actueel',
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
lastChildPhenomenonId = phenomenonId;
}
