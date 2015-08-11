var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div id="menu" className="fixed-menu-template">
      <p> <a href="/issues/new"> Submit a new issue </a> </p>
      <p> <a href="/profile"> My profile </a> </p>
      <p> <a href="/dashboard"> Dashboard </a> </p>
      <p> <a href="/discover"> Discover </a> </p>
      <a href="/users/sign_out" data-method="delete" rel="nofollow">Logout</a>
      </div>
      )
  }
})
