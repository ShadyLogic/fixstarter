var IssueMap = React.createClass({

	componentDidMount: function() {
		this.renderMap();
		this.findCurrentLocation();
				// map needs acceess to other functions
	},

	renderMap: function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
		var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
		    self 				 = this

		//map variable shared between functions.
		map = L.mapbox.map('map', 'mapbox.streets')
		latestMarker = undefined

		 map.on('click', function(e) {
				if (latestMarker === undefined) {} else {
					this.removeLayer(latestMarker) }

		    latestMarker = self.addMarker(e.latlng.lat, e.latlng.lng)
		    latestMarker.addTo(map);

		    self.props.latValue = e.latlng.lat
		    self.props.lonValue = e.latlng.lng
		  });

			map.on('mouseup', function(e) {
				self.props.latValue = e.latlng.lat
				self.props.lonValue = e.latlng.lng
			})

		//show the users zip code area of the map
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

	// --------------- CURRENT LOCATION RENDERING ------------------ //

	findCurrentLocation: function() {
		var geolocate = $('#geoLocate')
		var self = this
    geolocate.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate();
        self.setMarkerAtCurrentLocation();
    });

	},

	setMarkerAtCurrentLocation: function() {
		var self = this
		map.on('locationfound', function(e) {
				if (latestMarker === undefined) {} else {
					this.removeLayer(latestMarker) }

		    map.fitBounds(e.bounds);
		    latestMarker = self.addMarker(e.latlng.lat, e.latlng.lng)
		    latestMarker.addTo(map)
		   	self.props.latValue = e.latlng.lat
		    self.props.lonValue = e.latlng.lng
		});
	},

  render: function() {
    return (
      <div className="issue_map_wrapper">
        <div id='map'></div>
        <br/>
        <button className="ui button" id='geoLocate'>Find current location</button>
      </div>
    )
  }

})
