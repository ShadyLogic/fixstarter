var FilterBar = React.createClass({

	submitSearch: function(e){
		e.preventDefault();
		console.log('saerch')
		var category = $('select').val();
		var keyword = React.findDOMNode(this.refs.keyword).value.trim();
		var city = React.findDOMNode(this.refs.city).value.trim();

		this.props.onSearchSubmit({category: category, keyword: keyword, city: city});
	},

  render: function(){
    return (
      <div className="filter_bar_wrapper">

       <form onSubmit={this.submitSearch} >
       		<span>keyword:</span>
	       <input ref="keyword" type="search" name="search[keyword]" placeholder="searchbar"/>
	       <br/>
	       <span>city search:</span>
	       <input ref="city" type="search" name="search[city]" placeholder="searchbar"/>
	       <br/>
	       <span>category:</span>
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
	       <input type="submit" value="discover it all" />
       </ form>
       <br/>

      </div>
      )
  }
})
