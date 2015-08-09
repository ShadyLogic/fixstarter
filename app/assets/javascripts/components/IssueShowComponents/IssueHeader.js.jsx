var IssueHeader = React.createClass({
  render: function(){
    return (
      <div className="issue_header">
        <h3>{this.props.issue.title}</h3>
        < IssueCheckbox />
        < IssueStatus status={this.props.issue.status} />
        < SubmitFixButton />
      </div>
      )
  }
})
