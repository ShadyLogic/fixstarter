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

        <div id="footer_stream" className="ui feed small">
        {Fixes}
        </div>

        { this.props.current_user ?
          < SubmitFixButton issue_id={this.props.issue.id} />
        :
          null
        }

      </div>
      )
  }
})


