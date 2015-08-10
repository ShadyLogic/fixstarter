var UserIssuesList = React.createClass({
  render: function(){

    var Issues = this.props.issues.map(function(issue) {
      return < UserIssuesItem key={issue.id} id={issue.id} title={issue.title} image_url={issue.image_url} status={issue.status} />
    });


    return (
      <div className="user_fixed_list_wrapper">
      <h2> Issues Submitted </h2>
        {Issues}
      </div>
      )
  }
})
