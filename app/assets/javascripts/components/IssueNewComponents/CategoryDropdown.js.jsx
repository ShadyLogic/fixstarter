var CategoryDropdown = React.createClass({
  render: function(){

  var categories = this.props.categories.map(function(category){
    return <input ref="category" type="checkbox" name="issue[category]" value={category.id}> {category.name} <br/></input>
  });

    return (
   <div className="category_dropdown">
      {categories}
   </div>
      )
  }
})
