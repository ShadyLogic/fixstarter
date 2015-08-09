var UserTitle = React.createClass({
  render: function(){
    return (
      <div className="user_title_wrapper">
      <p> <i> Welcome {this.props.user.first_name}. You are number {this.props.user.id} to join FixStart. </i></p>
      </div>
      )
  }
})
