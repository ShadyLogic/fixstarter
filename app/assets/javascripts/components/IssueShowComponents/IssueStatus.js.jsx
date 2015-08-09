var IssueStatus = React.createClass({
  render: function(){
    return (
      <div className="issue_status">
        <h4>Status: {this.props.status}</h4>
      </div>
      )
  }
})
