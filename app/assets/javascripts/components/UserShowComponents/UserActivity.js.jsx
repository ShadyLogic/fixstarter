var UserActivity = React.createClass({
  render: function(){
    return (
      <div className="user_activity_wrapper">
      < UserFixedList />
      < UserIssuesList />
      < UserWatchingList />
      </div>
      )
  }
})
