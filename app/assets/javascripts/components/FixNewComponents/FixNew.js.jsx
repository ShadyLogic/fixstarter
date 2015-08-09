var FixNew = React.createClass({

  getInitialState: function(){
    return {issueId: this.props.issue.id}
  },

  /* handleFixSubmit: function(dataObject){
    var path = '/issues/' + this.state.issueId + '/fixes'
    App.request('post', path, dataObject)

  }, */

  render: function(){
    return (
      <div className="fix_new_wrapper">
        <h3> Submit a Fix! </h3>
        < FixImage />
        <br/>
        < FixForm issue={this.props.issue} /* onFixSubmit={this.handleFixSubmit} */ />
      </div>
      )
  }
})
