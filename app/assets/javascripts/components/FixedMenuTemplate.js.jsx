var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div className="fixed-menu-template">
      <p> <a href="/issues/new"> Submit a New Issue </a> </p>
      <p> <a href="/dashboard"> Dashboard </a> </p>
      <p> <a href="/discover"> Discover </a> </p>
      <form className="log-out-link" action="/users/sign_out" method="post">
        <input type="hidden" name="_method" value="delete" />
        <button type="submit">Log Out</button>
      </form>
      </div>
      )
  }
})
