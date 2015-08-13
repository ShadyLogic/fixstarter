var IssueVotes = React.createClass({

  getInitialState: function(){
    if (this.props.current_user_upvoted){
      var path = "/users_votes/*"
      var method = "DELETE"
      var button = " primary "
    }else{
      var path= "/users_votes"
      var method = "POST"
      var button = " "
    }
    return {
      upvotes: this.props.upvotes,
      button: button,
      voted: this.props.current_user_upvoted,
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

    if (this.state.voted){
      this.state.path= "/users_votes"
      this.state.method = "POST"
      this.state.voted = false;
      this.state.button = " "
      this.state.upvotes -= 1
    }else{
      this.state.path= "/users_votes/*"
      this.state.method = "DELETE"
      this.state.voted = true;
      this.state.button = " primary "
      this.state.upvotes += 1
    }

    this.forceUpdate()

  },

  render: function(){
    return (
      <div className="issue_votes">

      { this.props.current_user ?
        <div>
                <p> {this.state.upvotes} FixStart community members have up-voted this issue </p>
                <form className="issue_votes_form" onSubmit={this.handleSubmit}>
                  <button className={"ui icon" + this.state.button + "button"} type= "Submit"> <i className="thumbs up icon"  /> </button>
                </form>
        </div>
      :
        null
      }

      </div>
    )
  }
})
