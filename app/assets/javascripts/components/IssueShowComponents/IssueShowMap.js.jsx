var IssueShowMap = React.createClass({
	componentDidMount: function() {
		this.renderMap();
	},

	renderMap: function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
		var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
		    latestMarker = undefined,
		    self 				 = this

		map = L.mapbox.map('map', 'mapbox.streets')
		geocoder.reverseQuery({	lat: this.props.issue.latitude, 
													 	lon: this.props.issue.longitude }, self.showMap)
	},

	showMap: function(err, data) {
    map.setView([data.query[1], data.query[0]], 15); 
    this.addMarker(data.query[1], data.query[0]);
	},

	addMarker: function(c1, c2) {
		var marker = L.marker(new L.LatLng(c1, c2), {
	    icon: L.mapbox.marker.icon({
	        'marker-color': 'ff8888'
	    }),
		}).addTo(map)
	},

	render: function(){
	  return (
	    <div className="issue_show_map_wrapper">
	    	<div id='map'></div>	
	    </div>
	    )
	}

})