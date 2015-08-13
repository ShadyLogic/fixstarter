var FixShow = React.createClass({

  componentWillMount: function() {
    document.title ="FixStart | "+ this.props.fix.title;
  },


  render: function(){
    return (
      <div className="fix_show_page">

        <div className="ui stackable three column centered grid">
          <div className="column">
            <h4 className="ui horizontal divider header"> Fix Submited by the FixStart Community </h4>
            < FixHeader title={this.props.fix.title} id={this.props.fix.id} issue_id= {this.props.issue.id} issue_title= {this.props.issue.title} user_id={this.props.fix.user_id} user_first_name={this.props.fix.user_first_name} user_last_name={this.props.fix.user_last_name} />

            < MediaCard image_url={this.props.fix.image_url} description={this.props.fix.description} />

            <br/>
            < CommentsList comments={this.props.comments} path={'/issues/' + this.props.issue.id + '/fixes/' + this.props.fix.id + '/comments'} current_user={this.props.current_user}/>
          </div>
        </div>

      </div>
      )
  }
})
