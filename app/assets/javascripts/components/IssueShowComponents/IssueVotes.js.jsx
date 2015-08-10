var IssueVotes = React.createClass({
  render: function(){
    return (
      <div className="issue_votes">
      <p> This issue has {this.props.upvotes} upvotes. </p>
      <p>
            { this.props.current_user_upvoted ?
              <form action="/users_votes/*" method="POST">
              <input type="hidden" name="_method" value="DELETE" />
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button type= "Submit"> Remove UpVote </button>
              </form>

          :
              <form action="/users_votes" method="POST">
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button type= "Submit"> UpVote </button>
              </form>
          }
      </p>
      </div>
    )
  }
})
