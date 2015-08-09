var IssueMap = React.createClass({

	componentDidMount: function() {
	//Map config
	L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
	var geocoder = L.mapbox.geocoder('mapbox.places'),
	    map = L.mapbox.map('map', 'mapbox.streets');
	 var latestMarker = undefined
	 var self = this
	 map.on('click', function(e) {
			if (latestMarker === undefined) {} else {
				this.removeLayer(latestMarker) }
			
	    latestMarker = self.addMarker(e.latlng.lat, e.latlng.lng)
	    latestMarker.addTo(map);
	  });
	},

	addMarker: function(c1, c2) {
		var marker = L.marker(new L.LatLng(c1, c2), {
	    icon: L.mapbox.marker.icon({
	        'marker-color': 'ff8888'
	    }),
	    	draggable: true
		});
		return marker
	},

	showMap: function(err, data) {
		console.log(data)
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13); 
    } 
	},

  render: function() {
    return (
      <div className="issue_map_wrapper">
        <div id='map'></div>
      </div>
    )
  }

})
