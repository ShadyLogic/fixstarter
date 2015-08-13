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

      <div className="ui stackable three column centered grid">
          <div className=" column">
            <h2 className="ui horizontal divider header"> Submit a Fix! </h2>
            <p>Your fix is for <a href={"/issues/" + this.props.issue.id}>Issue #{this.props.issue.id}: {this.props.issue.title}</a></p>

            < FixImage issue={this.props.issue}/>
            <br/>
            < FixForm issue={this.props.issue} /* onFixSubmit={this.handleFixSubmit} */ />
            </div>
          </div>
      </div>
      )
  }
})
