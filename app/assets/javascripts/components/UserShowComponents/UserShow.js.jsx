var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">

      <br></br>

      < UserProfileCard user={this.props.user} same_user={this.props.same_user} />

      <br></br>

      < UserBadges user={this.props.user} />

      <br></br>

      < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} same_user={this.props.same_user} />

      </div>
      )
  }
})
