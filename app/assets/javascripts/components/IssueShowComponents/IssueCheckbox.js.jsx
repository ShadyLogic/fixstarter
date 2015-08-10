var IssueCheckbox = React.createClass({
  render: function(){
    return (
      <div className="issue_checkbox">
        <p>
          { this.props.current_user_watching ?
            <p> You are watching this issue.
              <form action="/issues_watches/*" method="POST">
              <input type="hidden" name="_method" value="DELETE" />
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button type= "Submit"> Unwatch </button>
              </form>
             </p>
          :
            <p> You are not watching this issue.
              <form action="/issues_watches" method="POST">
              <input type="hidden" name="user_id" value={this.props.current_user_id} />
              <input type="hidden" name="issue_id" value={this.props.issue.id} />
              <button type= "Submit"> Watch </button>
              </form>
            </p>
          }
         </p>

      </div>
      )
  }
})
