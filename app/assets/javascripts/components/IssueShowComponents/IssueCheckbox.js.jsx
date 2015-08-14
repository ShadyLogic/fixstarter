var IssueCheckbox = React.createClass({

  getInitialState: function(){
    if (this.props.current_user_watching){
      var path = "/issues_watches/*"
      var method = "DELETE"
      var button = " primary"
      var following = "Following"
    }else{
      var path= "/issues_watches"
      var method = "POST"
      var button = ""
      var following = "Follow"
    }
    return {
      button: button,
      watching: this.props.current_user_watching,
      following: following,
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
      this.state.following = "Follow"
      this.state.button = ""
    }else{
      this.state.path= "/issues_watches/*"
      this.state.method = "DELETE"
      this.state.watching = true;
      this.state.following = "Following"
      this.state.button = " primary"
    }

    this.forceUpdate()

  },

  render: function(){
    return (
      <div className="issue_checkbox">
        <p>
            <p>
              <form className="issue_following_form" onSubmit={this.handleSubmit}>
              <button className={"ui button" + this.state.button} type= "Submit"> {this.state.following} </button>
              </form>
             </p>
         </p>

      </div>
      )
  }
})
