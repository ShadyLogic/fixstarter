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
        <h4 className="ui horizontal divider header"> Submit a Fix! </h4>
        <p>Applied to <a href={"/issues/" + this.props.issue.id}>Issue #{this.props.issue.id}: {this.props.issue.title}</a></p>

        < FixImage />
        <br/>
        < FixForm issue={this.props.issue} /* onFixSubmit={this.handleFixSubmit} */ />
      </div>
      )
  }
})
