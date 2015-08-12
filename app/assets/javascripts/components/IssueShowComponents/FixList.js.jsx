var FixList = React.createClass({
  render: function(){
    var issueID = this.props.issue_id
    var Fixes = this.props.fixes.map(function(fix) {
      return < FixItem title={fix.title} issue_id={issueID} id={fix.id} key={fix.id} image_url={fix.image_url}/>
    });

    return (
      <div className="fix_list">
        <h4 className="ui horizontal divider header">
           Fixes
        </h4>

        <div className="ui feed small">
          { this.props.fixes.length == 0 ?
            <p> No fixes posted. Submit a fix! </p>
          :
            {Fixes}
          }
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


