var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div id="menu" className="ui five item inverted menu">
        <a className="item" href="/issues/new"> Submit an Issue </a>
        <a className="item" href="/dashboard"> Dashboard </a>
        <a className="item" href="/discover"> Discover </a>
        <a className="item" href="/profile"> My Profile </a>
        <a className="item" href="/users/sign_out" data-method="delete" rel="nofollow">Logout</a>
      </div>
      )
  }
})
