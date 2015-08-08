var SearchBar = React.createClass({

  render: function(){
    return (
      <div className="search_bar_wrapper">
        keyword search:
        <input type="search" placeholder="searchbar"/>
        <br/>
        zip search:
        <input type="search" placeholder="searchbar"/>
      </div>
      )
  }
})
