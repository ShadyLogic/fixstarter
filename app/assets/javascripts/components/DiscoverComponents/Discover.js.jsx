var Discover = React.createClass({
  render: function(){
    return (
      <div className="discover_page">
        discover page
        < SearchBar />
        < FilterBar />
        < ResultList />
        < DiscoverMap />
        < IssueNew />
      </div>
      )
  }
})
