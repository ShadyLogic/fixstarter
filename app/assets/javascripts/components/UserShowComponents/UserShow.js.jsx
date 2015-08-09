var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">
      <h1> Hello! Welcome to your FixStart profile page. </h1>
      < UserHeader user={this.props.user} />
      < UserBio user={this.props.user} />
      < UserBadges user={this.props.user} />
      <h1> This is your activity. </h1>
      < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} />
      </div>
      )
  }
})
