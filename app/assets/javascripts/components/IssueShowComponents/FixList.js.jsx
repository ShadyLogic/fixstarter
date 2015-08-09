var FixList = React.createClass({
  render: function(){
    var issueID = this.props.issue_id
    var Fixes = this.props.fixes.map(function(fix) {
      return < FixItem title={fix.title} issue_id={issueID} id={fix.id} key={fix.id} />
    });

    return (
      <div className="fix_list">
        <h3>Fixes</h3>
        {Fixes}
      </div>
      )
  }
})
