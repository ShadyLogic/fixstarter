var IssueCheckbox = React.createClass({

  getInitialState: function(){
    if (this.props.current_user_watching){
      var path = "/issues_watches/*"
      var method = "DELETE"
      var button = " primary"
    }else{
      var path= "/issues_watches"
      var method = "POST"
      var button = ""
    }
    return {
      button: button,
      watching: this.props.current_user_watching,
      path: path,
      method: method,
      data: {
        user_id: this.props.current_user_id,
        issue_id: this.props.issue.id
      }
    }

  },

  handleSubmit: function(e){
    e.preventDefault();

    App.jacobs_request(this.state.method, this.state.path, this.state.data)

    if (this.state.watching){
      this.state.path= "/issues_watches"
      this.state.method = "POST"
      this.state.watching = false;
      this.state.button = ""
    }else{
      this.state.path= "/issues_watches/*"
      this.state.method = "DELETE"
      this.state.watching = true;
      this.state.button = " primary"
    }

    this.forceUpdate()

  },

  render: function(){
    return (
      <div className="issue_checkbox">
        <p>
            <p>
              <form onSubmit={this.handleSubmit}>
              <button className={"ui button" + this.state.button} type= "Submit"> Following </button>
              </form>
             </p>
         </p>

      </div>
      )
  }
})
