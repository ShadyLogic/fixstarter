var IssueCheckbox = React.createClass({
  render: function(){
    return (
      <div className="issue_checkbox">
        <form>
          <input type="checkbox" name="watch" value="Watch" />Watch <br/>
          <input type="checkbox" name="flag" value="Flag" />Flag
        </form>

        <p>
          { this.props.current_user_watching ?
            <p> You are watching this issue.
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
