var IssueMap = React.createClass({

	componentDidMount: function() {
		this.renderMap();
				// map needs acceess to other functions
	},

	renderMap: function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
		var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
		    latestMarker = undefined,
		    self 				 = this

		//map variable shared between functions.
		map = L.mapbox.map('map', 'mapbox.streets')

		 map.on('click', function(e) {
				if (latestMarker === undefined) {} else {
					this.removeLayer(latestMarker) }
				
		    latestMarker = self.addMarker(e.latlng.lat, e.latlng.lng)
		    latestMarker.addTo(map);

		    console.log(e.latlng.lat)
		    console.log(e.latlng.lng)
		    
		  });

		geocoder.query(this.props.zip, self.showMap)
	},

	addMarker: function(c1, c2) {
		var marker = L.marker(new L.LatLng(c1, c2), {
	    icon: L.mapbox.marker.icon({
	        'marker-color': 'ff8888'
	    }),
	    	draggable: true
		});
		console.log(marker)
		return marker
	},

	showMap: function(err, data) {
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
