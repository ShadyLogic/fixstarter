var UserShow = React.createClass({

  componentWillMount: function() {
    document.title ="FixStart | "+ this.props.user.first_name +" "+ this.props.user.last_name;
  },

  render: function(){
    return (
      <div className="user_show_wrapper">

      <br/>

        <div className="ui stackable three column centered grid">
          <div className="column">
            <h3 className="ui horizontal divider header"> About Me </h3>
            < UserProfileCard user={this.props.user} same_user={this.props.same_user} />

            <br></br>

            < Badges badges={this.props.badges} />
          </div>

          <div className=" column">
            < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} same_user={this.props.same_user} />
          </div>
        </div>

      </div>
      )
  }
})
