var CategoryDropdown = React.createClass({
  render: function(){

  var categories = this.props.categories.map(function(category){
    return <option value={category.id}> {category.name} </option>
  });

    return (
   <div className="category_dropdown">
     <select ref="category" name="issue[category]" type="select" >
       {categories}
     </select>
   </div>
      )
  }
})
