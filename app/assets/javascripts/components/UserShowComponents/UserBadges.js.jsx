var UserBadges = React.createClass({
  render: function(){
    return (
      <div className="user_badges_wrapper">
      <p> These are the user badges for {this.props.user.first_name}. </p>
      </div>
      )
  }
})
