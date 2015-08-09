var SubmitFixButton = React.createClass({
  render: function(){
    return (
      <div className="submit_fix_button">
        <a href={"/issues/" + this.props.issueID + "/fixes/new"}> Submit A Fix</a>
      </div>
      )
  }
})
