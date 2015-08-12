var IssueStatus = React.createClass({
  render: function(){
    return (
      <div className="issue_status">
        <h4 className="ui horizontal divider header">
           Status
        </h4>
          <ul> {this.props.status} </ul>
      </div>
      )
  }
})
