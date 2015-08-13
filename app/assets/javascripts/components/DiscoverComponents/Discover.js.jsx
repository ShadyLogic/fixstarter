var Discover = React.createClass({

  getInitialState: function() {
    return {openIssues: this.props.openIssues, location: this.props.location}
  },

  handleSearchSubmit: function(searchData){
    var self = this
    $.ajax({
      url: '/search',
      method: 'post',
      data: searchData,
      dataType: 'json',
    }).done(function(searchResponse){
      console.log(searchResponse)

      // the hackiest thing ever... ugh. must fix.
      self.setMap(searchResponse)
      self.setMap(searchResponse)
    }).fail(function(searchResponse){
      console.log('fail')
    })
  },

  setMap: function(data) {
    this.setState({openIssues: data.issues, location: data.location})
  },

  componentWillMount: function() {
    document.title = "FixStart | Discover";
  },

  render: function(){
    console.log(this.props.openIssues)
    return (
      <div className="discover_page">
        <h2 className="ui horizontal divider header"> Discover </h2>
        < FilterBar onSearchSubmit={this.handleSearchSubmit} />
        < DiscoverMap openIssues={this.state.openIssues} location={this.state.location} />
        < ResultList results={this.state.openIssues} />
      </div>
      )
  }
})
