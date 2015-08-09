var FixNew = React.createClass({

  getInitialState: function(){
    return {issueId: ""}
  },

  handleFixSubmit: function(dataObject){
    var path = '/issues/:issue_id/fixes'
    App.request('post', path, dataObject)
    {/* will probably want to setState? */}
  },

  render: function(){
    return (
      <div className="fix_new_wrapper">
        <h3> Submit a Fix! </h3>
        < FixImage />
        <br/>
        < FixForm onFixSubmit={this.handleFixSubmit} />
      </div>
      )
  }
})
