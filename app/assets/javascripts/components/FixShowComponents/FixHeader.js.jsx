var FixHeader = React.createClass({
  render: function(){
    return (
      <div className="fix_header">
        <h4 className="ui horizontal divider header"> Fix Submited by
        the FixStart Community </h4>

        <h2 className="ui header">{this.props.title}</h2>

        <p>Applied to <a href={"/issues/" + this.props.issue_id}>Issue #{this.props.issue_id}: {this.props.issue_title}</a></p>

        <p>Submitted by: <a href={"/users/" + this.props.user_id}> {this.props.user_first_name} {this.props.user_last_name} </a></p>

        <br/>
      </div>
      )
  }
})
