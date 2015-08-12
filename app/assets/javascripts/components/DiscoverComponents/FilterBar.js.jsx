var FilterBar = React.createClass({

	submitSearch: function(e){
		e.preventDefault();
		console.log('saerch')
		var category = $('select').val();
		var keyword = React.findDOMNode(this.refs.keyword).value.trim();
		var location = React.findDOMNode(this.refs.location).value.trim();

		this.props.onSearchSubmit({category: category, keyword: keyword, location: location});
	},

  render: function(){
    return (
      <div className="filter_bar_wrapper">

       <form className="ui form" onSubmit={this.submitSearch} >
        <div className="field">
          <label>Keyword</label>
          <input ref="keyword" type="search" name="search[keyword]" placeholder="e.g., an issue description"/>
          <br/>
        </div>

        <div className="field">
          <label>Location</label>
          <input ref="location" type="search" name="search[location]" placeholder="e.g., San Francisco or 94122"/>
          <br/>
        </div>

        <div className="field">
          <label>Category</label>
          <select>
          <option value="None">None</option>
          <option value="Heavy">Heavy</option>
          <option value="Very Heavy">Very Heavy</option>
          <option value="Dirty">Dirty</option>
          <option value="Tools">Tools</option>
          <option value="Yard Work & Removal">Yard Work & Removal</option>
          <option value="General Handyman">General Handyman</option>
          <option value="Escalate">Escalate</option>
          </select>
	       <br/>
        </div>

	       <button className="ui primary button" type="submit">Discover it all</button>

       </ form>
       <br/>

      </div>
      )
  }
})
