var IssueCheckbox = React.createClass({
  render: function(){
    return (
      <div className="issue_checkbox">
        <p>
          { this.props.current_user_watching ?
            <p> You are currently following this issue
              <form action="/issues_watches/*" method="POST">
              <input type="hidden" name="_method" value="DELETE" />
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button className="ui button" type= "Submit"> Unfollow </button>
              </form>
             </p>
          :
            <p> You are not currently following this issue
              <form action="/issues_watches" method="POST">
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button className="ui button primary" type= "Submit"> Follow </button>
              </form>
            </p>
          }
         </p>

      </div>
      )
  }
})
