var DiscoverMap = React.createClass({

	getInitialState: function() {
		return {location: this.props.location, openIssues: this.props.openIssues}
	},

		componentDidMount: function() {
			L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
			map = L.mapbox.map('map', 'mapbox.streets')
			markers = new L.MarkerClusterGroup();
			geocoder 		 = L.mapbox.geocoder('mapbox.places')

			// disable map scroll zoom
			map.scrollWheelZoom.disable();

			//map centering on click
			markers.on('click', function(e){
				map.panTo(e.layer.getLatLng())
			})

			this.renderMap();
			this.addIssues(this.state.openIssues)
		},

		componentWillReceiveProps: function(props) {
			markers.clearLayers()
			this.setState({location: props.location, openIssues: props.openIssues})
			this.addIssues(this.state.openIssues)
			this.renderMap();
		},

		renderMap: function() {
			var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
			    latestMarker = undefined,
			    self 				 = this

			//show the users zip code area of the map
			geocoder.query(this.state.location, self.showMap)
		},

		showMap: function(err, data) {
	    if (data.lbounds) {
	        map.fitBounds(data.lbounds);
	    } else if (data.latlng) {
	        map.setView([data.latlng[0], data.latlng[1]], 13); 
	    } 
		},

		addIssues: function(issues) {
			var self = this
	    for (var i = 0; i < issues.length; i++) {
	      var issue = issues[i];
	      self.addMarker(issue)
	    	}
		 },

		 addMarker: function(issue) {
		 		if (issue.category_icon != 'none') {
				 	var marker = L.marker(new L.LatLng(issue.latitude, issue.longitude), {
			 	    	icon: L.mapbox.marker.icon({'marker-symbol': issue.category_icon, 'marker-color': issue.color}),
			 	    properties: {
			 	    	title: issue.title,
			 	    	category: issue.category_name,
			 	    	points: issue.points,
			 	    	description: issue.description,
			 	    	link: issue.link,
			 	  }
			 	});

			 	var issuePackage = this.packageIssue(issue)
			 	marker.bindPopup(issuePackage)
			 	markers.addLayer(marker);
			}

		 		map.addLayer(markers);
		 },

		findAndUpdateMarker: function(marker) {
			var self = this
			markers.eachLayer(function(i) {
				if (i._latlng.lng == marker.longitude && i._latlng.lat == marker.latitude) {
					markers.removeLayer(i)
					self.addIssues([marker])
				}
			});
		},

		packageIssue: function(issue) {
			return ("<p><b>"+issue.title+" </b><em>("+issue.category_name+")</em></p><p>"+issue.description+"</p><img src="+issue.image+" width='50' height='50'><span> "+issue.points+" point(s) | </span><a href='"+issue.link+"'>"+issue.fix_text+"</a>")
		},

	  render: function(){
	    return (
	      <div className="discover_map_wrapper">
	      	<div id='map'></div>
	      </div>
	      )
	  }

})
