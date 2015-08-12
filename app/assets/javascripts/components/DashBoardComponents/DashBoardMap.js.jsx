var DashboardMap = React.createClass({

	componentDidMount: function() {
		this.renderMap();
		this.addIssues(this.props.allOpenIssues)

		// Socket
	  if (this.props.environment == 'development'){
      var socket = io('localhost:5001')
      console.log("DEVELOPMENT-MAP")
    }else{
      var socket = io("https://node-fixstart.herokuapp.com")
      console.log("PRODUCTION")
    }

		var self = this
		socket.on('issue-created', function(data) {
			console.log('issue-created')
			self.addIssues(data)
		})

		// NOTE: singleMarkerObject is, unlike the other objects we recieve, a hash and NOT an array. on Line 75, we wrap it
		// in an array before passing it to the addIssues method.
		socket.on('fix-created', function(singleMarkerObject){
			console.log('fix-created')
			self.findAndUpdateMarker(singleMarkerObject)
		})

	},

	renderMap: function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
		var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
		    latestMarker = undefined,
		    self 				 = this

		map = L.mapbox.map('map', 'mapbox.streets')
		markers = new L.MarkerClusterGroup();

		// disable map scroll zoom
		map.scrollWheelZoom.disable();

		// center to issue when clicked
		markers.on('click', function(e){
			map.panTo(e.layer.getLatLng())
		})

		//show the users zip code area of the map
		geocoder.query(this.props.zip, self.showMap)
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
      <div className="dashboard_map_wrapper">
      	<div id='map'></div>
      </div>
      )
  }

});
