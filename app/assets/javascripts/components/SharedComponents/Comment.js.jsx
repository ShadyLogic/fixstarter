var Comment = React.createClass({
  render: function(){
    return (
      <div className="comment">
        <a className="avatar" href={"/users/"+ this.props.user_id}><img src={this.props.user.avatar_url} /></a>
        <div className="content">
          <a className="author" href={"/users/"+ this.props.user_id}> {this.props.user.first_name} {this.props.user.last_name} </a>
          <div className="text">
            {this.props.content}
          </div>
        </div>
      </div>
      )
  }
})
