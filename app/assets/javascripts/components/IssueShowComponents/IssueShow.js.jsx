var IssueShow = React.createClass({
  render: function(){
    return (
      <div className="issue_show">

      <h2 className="ui horizontal divider header"> FixStart Issue </h2>
      <br/>
      <br/>

      <div className="ui stackable three column centered grid">
          <div className=" column">
            < IssueHeader issue={this.props.issue} address={this.props.address} current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} upvotes={this.props.upvotes} current_user_upvoted={this.props.current_user_upvoted} current_user_created_issue={this.props.current_user_created_issue} current_user={this.props.current_user} />

            <br/>

            < IssueDescription issue={this.props.issue} categories={this.props.categories}  />

            <br/>

          </div>


          <div className=" column">
            <h4 className="ui horizontal divider header">Location</h4>
            < IssueShowMap issue={this.props.issue} />

            <br/>
            < FixList fixes={this.props.fixes} issue={this.props.issue} issue_id={this.props.issue.id} current_user={this.props.current_user} />
          </div>

          </div>
      </div>
    )
  }
})
