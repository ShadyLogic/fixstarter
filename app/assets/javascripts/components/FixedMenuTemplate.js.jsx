var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div className="fixed-menu-template">
      <p> <a href="/issues/new"> Submit a New Issue </a> </p>
      <p> <a href="/dashboard"> Dashboard </a> </p>
      <p> <a href="/discover"> Discover </a> </p>
      <p> Log Out </p>
      </div>
      )
  }
})
