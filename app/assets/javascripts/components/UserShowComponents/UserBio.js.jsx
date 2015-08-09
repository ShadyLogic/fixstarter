var UserBio = React.createClass({
  render: function(){
    return (
      <div className="user_bio_wrapper">
      <p><b>Bio:</b> {this.props.user.bio} </p>
      </div>
      )
  }
})
