var IssueOpenClose = React.createClass({

  getInitialState: function(){
    if (this.props.issue.status == "closed"){
      var path = "/issues/"+this.props.issue.id+"/reopen"
      var button = ""
      var button_text = "Re-open Issue"
      var message = "You created this issue, and someone has submitted a fix, which auto-closed your issue. Would you like to re-open the issue?"
      var status = "closed"
    }else{
      var path= "/issues/"+this.props.issue.id+"/close"
      var button = " red"
      var button_text = "Close Issue"
      var message = "You created this issue, but no one has submitted fixes yet, would you like to close your issue?"
      var status = "open"
    }
    return {
      message: message,
      button: button,
      button_text: button_text,
      status: status,
      path: path
    }

  },

  handleSubmit: function(e){
    e.preventDefault();

    App.jacobs_request("PUT", this.state.path)

    if (this.state.status == "closed"){
      this.state.path= "/issues/"+this.props.issue.id+"/close"
      this.state.status = "open"
      this.state.button = " red"
      this.state.button_text = "Close Issue"
      this.state.message = "You created this issue, but no one has submitted fixes yet, would you like to close your issue?"
    }else{
      this.state.path= "/issues/"+this.props.issue.id+"/reopen"
      this.state.status = "closed"
      this.state.button = ""
      this.state.button_text = "Re-open Issue"
      this.state.message = "You created this issue, and someone has submitted a fix, which auto-closed your issue. Would you like to re-open the issue?"
    }

    this.forceUpdate()

  },

  render: function(){
    return (
      <div className="issue_open_close">

      <h4 className="ui horizontal divider header"> My Stats </h4>

      <p>
          <p> {this.state.message}

                <form onSubmit={this.handleSubmit}>
                <button className={"ui button"+this.state.button} type= "Submit"> {this.state.button_text} </button>
                </form>

          </p>
      </p>

      </div>
    )
  }
})
