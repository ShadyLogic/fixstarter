var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div className="fixed-menu-template">
      <p> <a href="/issues/new"> Submit a New Issue </a> </p>
      <p> <a href="/my_profile"> My Profile </a> </p>
      <p> <a href="/dashboard"> Dashboard </a> </p>
      <p> <a href="/discover"> Discover </a> </p>
      <a href="/users/sign_out" data-method="delete" rel="nofollow">Logout</a>
      </div>
      )
  }
})
