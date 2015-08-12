var IssueVotes = React.createClass({
  render: function(){
    return (
      <div className="issue_votes">

      { this.props.current_user ?
        <div>
              { this.props.current_user_upvoted ?
                <form action="/users_votes/*" method="POST">
                <input type="hidden" name="_method" value="DELETE" />
                <input type="hidden" name="user_id" value={this.props.current_user_id} />
                <input type="hidden" name="issue_id" value={this.props.issue.id} />
                <button className="ui icon primary button" type= "Submit"> <i className="thumbs up icon" /> </button>
                </form>
              :
                <form action="/users_votes" method="POST">
                <input type="hidden" name="user_id" value={this.props.current_user_id} />
                <input type="hidden" name="issue_id" value={this.props.issue.id} />
                <button className="ui icon button" type= "Submit"> <i className="thumbs up icon" /> </button>
                </form>
              }
        </div>
      :
        null
      }

      </div>
    )
  }
})
