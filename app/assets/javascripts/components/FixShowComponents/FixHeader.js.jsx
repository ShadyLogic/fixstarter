var FixHeader = React.createClass({
  render: function(){
    return (
      <div className="fix_header">
        <h2>Fix #{this.props.id}</h2>
        <p>Applied to <a href={"/issues/" + this.props.issue_id}>Issue #{this.props.issue_id}</a></p>
        <h3>{this.props.title}</h3>
      </div>
      )
  }
})
