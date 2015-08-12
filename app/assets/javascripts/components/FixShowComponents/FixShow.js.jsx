var FixShow = React.createClass({
  render: function(){
    return (
      <div className="fix_show_page">
        < FixHeader title={this.props.fix.title} id={this.props.fix.id} issue_id= {this.props.issue.id} issue_title= {this.props.issue.title} user_id={this.props.fix.user_id} user_first_name={this.props.fix.user_first_name} user_last_name={this.props.fix.user_last_name} />
        < MediaCard image_url={this.props.fix.image_url} description={this.props.fix.description} />
        < CommentsList comments={this.props.comments} path={'/issues/' + this.props.issue.id + '/fixes/' + this.props.fix.id + '/comments'} current_user={this.props.current_user}/>
      </div>
      )
  }
})
