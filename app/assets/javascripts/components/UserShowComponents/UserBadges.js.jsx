var UserBadges = React.createClass({
  render: function(){
    return (
      <div className="user_badges_wrapper">
        <div className="ui cards">
          <div className="card">
            <div className="content">
            These are the user badges for {this.props.user.first_name}.
            </div>
          </div>
        </div>
      </div>
      )
  }
})
