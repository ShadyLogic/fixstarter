var IssueOpenClose = React.createClass({
  render: function(){
    return (
      <div className="issue_open_close">

      <h4 className="ui horizontal divider header"> My Stats </h4>

      <p> {this.props.issue.status == "closed" ?
          <p> You created this issue, and someone has submitted a fix, which auto-closed your issue. Would you like to re-open the issue?

                <form action={"/issues/"+this.props.issue.id+"/reopen"} method="POST">
                <input type="hidden" name="_method" value="PUT" />
                <button className="ui button" type= "Submit"> Re-open Issue </button>
                </form>

          </p>
        :
        <p> You created this issue, but no one has submitted fixes yet, would you like to close your issue?

              <form action={"/issues/"+this.props.issue.id+"/close"} method="POST">
              <input type="hidden" name="_method" value="PUT" />
              <button className="ui button" type= "Submit"> Close the issue </button>
              </form>

        </p>
      }
      </p>

      </div>
    )
  }
})
