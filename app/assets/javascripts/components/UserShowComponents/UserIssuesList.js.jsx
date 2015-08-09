var UserIssuesList = React.createClass({
  render: function(){
    return (
      <div className="user_fixed_list_wrapper">
      <h2> This is a list of issues you have submitted. </h2>
      < UserIssuesItem issues={this.props.issues} />
      </div>
      )
  }
})
