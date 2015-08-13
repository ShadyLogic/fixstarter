var Sidebar = React.createClass({
  render: function(){
    return (
    <div id="m_menu" className="ui floating sidebar vertical menu inverted">
      <a href="/issues/new" className="item">
        <i className="plus icon"></i>
        Submit an Issue
      </a>

      <a href="/dashboard" className="item">
        <i className="home icon"></i>
        Dashboard
      </a>

      <a href="/discover" className="item">
        <i className="plus icon"></i>
        Discover
      </a>

      <a href="/profile" className="item">
        <i className="plus icon"></i>
        Profile
      </a>

      <a href="/users/sign_out" className="item">
        <i className="plus icon"></i>
        Logout
      </a>
    </div>
    )
  }
})
