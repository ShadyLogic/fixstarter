var CategoryDropdown = React.createClass({
  render: function(){

  var categories = this.props.categories.map(function(category,index){
    if(category.name != "Uncategorized"){
      return (
        <div key={"category" + index}>
          <label htmlFor={"category" + index}></label>
          <input id={"category" + index} ref="category" type="checkbox" name={"categories[category" + index + "]"}  value={category.id}> {category.name} <br/></input>
        </div>
      )
    }
  });

    return (
   <div className="category_dropdown">
      {categories}
   </div>
      )
  }
})


