var UserFixedItem = React.createClass({
  render: function(){
    return (
      <div className="user_fixed_item_wrapper">
      <p>
        <img className="img-circle" src={this.props.image_url}></img>
        <a href={"/issues/" + this.props.issue_id + "/fixes/" + this.props.id} >{this.props.title}</a>
      </p>
      </div>
      )
  }
})
