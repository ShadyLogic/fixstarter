var IssueNew = React.createClass({

  // we don't need this method due to non-ajax!
  handleIssueSubmit: function(dataObject){
    console.log(dataObject)
  },

  render: function(){
    return (
      <div className="issue_new_wrapper">
        <br/>
        <h4 className="ui horizontal divider header"> Submit an Issue</h4>
          < IssueImage />
          < IssueForm zip={this.props.zip} categories={this.props.categories} onIssueSubmit={this.handleIssueSubmit} />
      </div>
      )
  }
})
