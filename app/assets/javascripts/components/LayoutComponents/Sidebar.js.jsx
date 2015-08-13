var Sidebar = React.createClass({
  render: function(){
    return (
    <div id="m_menu" className="ui floating sidebar vertical menu inverted">
      <a href="/issues/new" className="item m_item">
        <i className="plus icon"></i>
        Submit an Issue
      </a>

      <a href="/dashboard" className="item m_item">
        <i className="home icon"></i>
        Dashboard
      </a>

      <a href="/discover" className="item m_item">
        <i className="search icon"></i>
        Discover
      </a>

      <a href="/profile" className="item m_item">
        <i className="user icon"></i>
        My Profile
      </a>


      <a href="/team" className="item m_item">
        <i className="ellipsis vertical icon"></i>
        About Us
      </a>

      <a href="/users/sign_out" data-method="delete" className="item m_item">
        <i className="sign out icon"></i>
        Logout
      </a>
    </div>
    )
  }
})
