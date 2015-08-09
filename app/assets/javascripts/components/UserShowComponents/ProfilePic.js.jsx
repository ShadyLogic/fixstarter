var ProfilePic = React.createClass({
  render: function(){
    return (
      <div className="profile_pic_wrapper">
      <img className="img-circle" src={this.props.user.avatar_url}></img>

      </div>
      )
  }
})
