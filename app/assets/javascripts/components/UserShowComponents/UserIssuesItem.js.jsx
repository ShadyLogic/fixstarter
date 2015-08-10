var UserIssuesItem = React.createClass({
  render: function(){
    return (
      <div className="user_issues_item_wrapper">
      <p>
        <img className="img-circle" src={this.props.image_url}></img>
        <a href={"/issues/" + this.props.id } >{this.props.title}</a> <b>STATUS:</b>{this.props.status}</p>
      </div>
      )
  }
})
