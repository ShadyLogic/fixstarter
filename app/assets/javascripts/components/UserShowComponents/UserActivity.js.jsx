var UserActivity = React.createClass({
  render: function(){
    return (
      <div className="user_activity_wrapper">
      < UserFixedList user={this.props.user} />
      < UserIssuesList user={this.props.user} />
      < UserWatchingList user={this.props.user} />
      </div>
      )
  }
})
