var UserShow = React.createClass({
  render: function(){
    return (
      <div className="user_show_wrapper">
      <h1> This is your profile. </h1>
      < UserHeader />
      < UserBio />
      <h1> This is your activity. </h1>
      < UserActivity />
      </div>
      )
  }
})
