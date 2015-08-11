var UserIssuesList = React.createClass({
  render: function(){

    var Issues = this.props.issues.map(function(issue) {
      return < UserIssuesItem key={issue.id} id={issue.id} title={issue.title} image_url={issue.image_url} status={issue.status} />
    });


    return (
      <div className="user_fixed_list_wrapper">
      <h3 className="ui header"> Issues Submitted </h3>
        {Issues}
      </div>
      )
  }
})
