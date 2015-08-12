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

       <form onSubmit={this.submitSearch} >
       		<span>Keyword:</span>
	       <input ref="keyword" type="search" name="search[keyword]" placeholder="searchbar"/>
	       <br/>
	       <span>Location:</span>
	       <input ref="location" type="search" name="search[location]" placeholder="searchbar"/>
	       <br/>
	       <span>Category:</span>
	       <select>
		       <option value="None">All</option>
		       <option value="Heavy">Heavy</option>
		       <option value="Very Heavy">Very Heavy</option>
		       <option value="Dirty">Dirty</option>
		       <option value="Tools">Tools</option>
		       <option value="Yard Work & Removal">Yard Work & Removal</option>
		       <option value="General Handyman">General Handyman</option>
		       <option value="Escalate">Escalate</option>
		       <option value="Uncategorized">Uncategorized</option>
	       </select>
	       <br/>
	       <input type="submit" value="discover it all" />
       </ form>
       <br/>

      </div>
      )
  }
})
