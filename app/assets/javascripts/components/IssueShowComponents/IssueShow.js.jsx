var IssueShow = React.createClass({
  render: function(){
    return (
      <div className="issue_show">
        <h2>Issue #{this.props.issue.id}</h2>

        < IssueHeader issue={this.props.issue} categories={this.props.categories} current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} upvotes={this.props.upvotes} current_user_upvoted={this.props.current_user_upvoted} current_user={this.props.current_user} />

        < FixList fixes={this.props.fixes} issue_id={this.props.issue.id} />
        < MediaCard image_url={this.props.issue.image_url} description={this.props.issue.description} />
        < CommentsList comments={this.props.comments} path={'/issues/' + this.props.issue.id + '/comments'} current_user={this.props.current_user} />
        < IssueShowMap issue={this.props.issue} />
      </div>
    )
  }
})
