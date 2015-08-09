var IssueNew = React.createClass({

  // we don't need this method due to non-ajax!
  handleIssueSubmit: function(dataObject){
    console.log(dataObject)
  },

  render: function(){
    return (
      <div className="issue_new_wrapper">
        < IssueImage />
        < IssueForm zip={this.props.zip} onIssueSubmit={this.handleIssueSubmit} />
      </div>
      )
  }
})
