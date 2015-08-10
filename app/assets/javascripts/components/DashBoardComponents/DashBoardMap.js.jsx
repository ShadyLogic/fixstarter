var DashboardMap = React.createClass({

	componentDidMount: function() {
		this.renderMap();
		this.addIssues(this.props.allOpenIssues)
	},

	renderMap: function() {
		L.mapbox.accessToken = 'pk.eyJ1IjoibXdoYXR0ZXJzIiwiYSI6ImM5YjljNGE4MzcwZmRlOTJlOTNmMTczMTY4N2FkMDNiIn0.mYeJTMzrCEY8XMUqqTp6tg';
		var geocoder 		 = L.mapbox.geocoder('mapbox.places'),
		    latestMarker = undefined,
		    self 				 = this

		map = L.mapbox.map('map', 'mapbox.streets')
		markers = new L.MarkerClusterGroup();

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
    for (var i = 0; i < issues.length; i++) {
      var issue = issues[i];
      var marker = L.marker(new L.LatLng(issue.latitude, issue.longitude), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'circle', 'marker-color': issue.color}),
          properties: {
          	title: issue.title,
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

	packageIssue: function(issue) {
		return ("<p><b>"+issue.title+"</b></p><p>"+issue.description+"</p><a href='"+issue.link+"'>"+issue.fix_text+"</a>")
	},

  render: function(){
    return (
      <div className="dashboard_map_wrapper">
      	<div id='map'></div>	
      </div>
      )
  }

});
