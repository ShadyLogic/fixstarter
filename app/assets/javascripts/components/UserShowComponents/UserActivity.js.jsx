var UserActivity = React.createClass({
  render: function(){
    return (
      <div className="user_activity_wrapper">

        < UserIssuesList user={this.props.user} issues={this.props.issues}  />
        <br/>

        < UserFixedList user={this.props.user} fixes={this.props.fixes} />
        <br/>

        < UserWatchingList user={this.props.user} watches={this.props.watches} same_user={this.props.same_user} />
        <br/>

      </div>
      )
  }
})
