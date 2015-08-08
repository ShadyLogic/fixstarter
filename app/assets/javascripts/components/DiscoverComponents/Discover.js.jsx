var Discover = React.createClass({
  render: function(){
    return (
      <div className="discover_page">
        <h2> Discover Page </h2>
        < SearchBar />
        < FilterBar />
        < ResultList />
        < DiscoverMap />
        < IssueNew />
      </div>
      )
  }
})
