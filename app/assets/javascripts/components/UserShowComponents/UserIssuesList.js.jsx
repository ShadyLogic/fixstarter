var UserIssuesList = React.createClass({
  render: function(){

    var Issues = this.props.issues.map(function(issue) {
      return < UserIssuesItem key={issue.id} title={issue.title} image_url={issue.image_url} />
    });


    return (
      <div className="user_fixed_list_wrapper">
      <h2> This is a list of issues you have submitted. </h2>
      {Issues}
      </div>
      )
  }
})
