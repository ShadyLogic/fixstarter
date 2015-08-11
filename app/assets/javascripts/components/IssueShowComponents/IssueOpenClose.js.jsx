var IssueOpenClose = React.createClass({
  render: function(){
    return (
      <div className="issue_open_close">

      <p> This is where the Open / Close button will be </p>

      <p> {this.props.current_user_created_issue?
        <p> You created this issue. </p>
        :
        <p> You did not create this issue. </p>
      }
      </p>

      </div>
    )
  }
})
