var Discover = React.createClass({

  getInitialState: function() {
    return {openIssues: this.props.openIssues, zip: this.props.zip}
  },

  handleSearchSubmit: function(searchData){
    $.ajax({
      url: '/search',
      method: 'post',
      data: searchData,
      dataType: 'json',
    }).done(function(searchResponse){
      console.log(searchResponse)
    }).fail(function(searchResponse){
      console.log('fail')
    })
  },

  render: function(){
    return (
      <div className="discover_page">
        <h2> Discover Page </h2>
        < FilterBar onSearchSubmit={this.handleSearchSubmit} />
        < DiscoverMap openIssues={this.state.openIssues} zip={this.state.zip} />
        < ResultList />
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
