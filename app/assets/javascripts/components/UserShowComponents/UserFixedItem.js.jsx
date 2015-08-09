var UserFixedItem = React.createClass({
  render: function(){
    return (
      <div className="user_fixed_item_wrapper">
      <p><a href={"/issues/" + this.props.issue_id + "/fixes/" + this.props.id} >{this.props.title}</a></p>
      </div>
      )
  }
})
