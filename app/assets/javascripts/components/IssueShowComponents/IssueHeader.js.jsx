var IssueHeader = React.createClass({
  render: function(){
    return (
      <div className="issue_header">
        <h3> Header </h3>
        < IssueCheckbox />
        < IssueStatus />
        < SubmitFixButton />
      </div>
      )
  }
})
