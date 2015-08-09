var UserHeader = React.createClass({
  render: function(){
    return (
      <div className="user_header_wrapper">
      < UserTitle user={this.props.user} />
      < ProfilePic user={this.props.user} />
      </div>
      )
  }
})
