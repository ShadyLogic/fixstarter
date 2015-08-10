var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">

      {this.props.same_user ?
        <h1> Hello! Welcome to your FixStart profile page. </h1>
      :
        <h1> {this.props.user.first_name} {this.props.user.last_name} </h1>
      }

      < UserHeader user={this.props.user} />
      < UserBio user={this.props.user} />
      < UserBadges user={this.props.user} />

      < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} same_user={this.props.same_user} />

      </div>
      )
  }
})
