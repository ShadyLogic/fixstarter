var ResultItem = React.createClass({
  render: function(){
    return (
      <div className="result_item_wrapper">
      	<h4>{this.props.title}</h4>
        <img src={this.props.image} width='50' height='50' />
      	<em>{this.props.category_name}</em> <strong>{this.props.points} points</strong>
      	<p>{this.props.description}</p>
      	<a href={this.props.link}>Fix it!</a>
      </div>
      )
  }
})
