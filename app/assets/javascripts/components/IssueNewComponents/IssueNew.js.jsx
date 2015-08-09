var IssueNew = React.createClass({

  handleIssueSubmit: function(dataObject){
    var path = '/issues'
    App.request('post', path, dataObject)
    {/* will probably want to setState? */}
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
