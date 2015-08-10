var UserActivity = React.createClass({
  render: function(){
    return (
      <div className="user_activity_wrapper">
      < UserFixedList user={this.props.user} fixes={this.props.fixes} />
      < UserIssuesList user={this.props.user} issues={this.props.issues}  />
      < UserWatchingList user={this.props.user} watches={this.props.watches} same_user={this.props.same_user} />
      </div>
      )
  }
})
