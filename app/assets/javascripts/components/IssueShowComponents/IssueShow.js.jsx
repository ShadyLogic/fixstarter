var IssueShow = React.createClass({
  render: function(){
    return (
      <div className="issue_show">
        <h2>Issue #{this.props.issue.id}</h2>
        < IssueHeader issue={this.props.issue} />
        < FixList fixes={this.props.fixes} issue_id={this.props.issue.id} />
        < MediaCard image_url={this.props.issue.image_url} description={this.props.issue.description} />
        < CommentsList comments={this.props.comments} />
      </div>
    )
  }
})
