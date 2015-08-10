var IssueHeader = React.createClass({
  render: function(){
    return (
      <div className="issue_header">
        <h3>{this.props.issue.title}</h3>
        <h4>{this.props.category_name}</h4>
        < IssueCheckbox current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} issue={this.props.issue} />
        < IssueStatus status={this.props.issue.status} />
        < SubmitFixButton issueID={this.props.issue.id} />
      </div>
      )
  }
})
