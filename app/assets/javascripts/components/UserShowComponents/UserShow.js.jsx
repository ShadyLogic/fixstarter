var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">

      <div className="ui card">
        <div className="image">
          <img src={this.props.user.avatar_url}></img>
        </div>
        <div className="content">
          <p className="header"> {this.props.user.first_name} {this.props.user.last_name} </p>
          <div className="meta">
            <span className="date"> FixStart Hero ID #{this.props.user.id}</span>
          </div>
          <div className="description">
            {this.props.user.bio}
          </div>
          <div className="meta">
            <span> {this.props.same_user ?
              <div>
                <a href="/profile/edit"> Update my profile information </a>
                <br></br>
              </div>
            :
              <p></p>
            } </span>
          </div>

        </div>
      </div>

      < UserHeader user={this.props.user} />
      < UserBio user={this.props.user} />
      < UserBadges user={this.props.user} />

      < UserActivity user={this.props.user} issues={this.props.issues} fixes={this.props.fixes} watches={this.props.watches} same_user={this.props.same_user} />

      </div>
      )
  }
})
