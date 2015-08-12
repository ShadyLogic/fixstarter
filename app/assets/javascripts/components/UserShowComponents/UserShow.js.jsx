var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">


      <h3 className="ui horizontal divider header"> About Me </h3>

      < UserProfileCard user={this.props.user} same_user={this.props.same_user} />

      <br></br>

      < Badges badges={this.props.badges} />

      <br></br>

      < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} same_user={this.props.same_user} />

      </div>
      )
  }
})
