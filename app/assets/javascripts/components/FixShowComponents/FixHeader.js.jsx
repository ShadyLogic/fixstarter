var FixHeader = React.createClass({
  render: function(){
    return (
      <div className="fix_header">
        <h2 className="ui header">{this.props.title}</h2>
        <p>Applied to <a href={"/issues/" + this.props.issue_id}>Issue #{this.props.issue_id}</a></p>
        <br/>
      </div>
      )
  }
})
