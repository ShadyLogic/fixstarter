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

  render: function(){
    return (
      <div className="discover_page">
        <h2> Discover Page </h2>
        < FilterBar onSearchSubmit={this.handleSearchSubmit} />
        < DiscoverMap openIssues={this.state.openIssues} location={this.state.location} />
        < ResultList />
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
