var FixList = React.createClass({
  render: function(){
    var issueID = this.props.issue_id
    var Fixes = this.props.fixes.map(function(fix) {
      return < FixItem title={fix.title} issue_id={issueID} id={fix.id} key={fix.id} />
    });

    return (
      <div className="fix_list">
        <h4 className="ui horizontal divider header">
           Fixes
        </h4>
        {Fixes}

        < SubmitFixButton issue_id={this.props.issue.id} />

      </div>
      )
  }
})


