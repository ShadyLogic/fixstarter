var DashboardNav = React.createClass({

  render: function(){
    return(
      <div className="ui grid">

        <div className="two column row">
          <a className="ui button primary nav_button" href="/discover"> Find an Issue </a>
          <a className="ui button primary nav_button" href="/issues/new"> Submit an Issue </a>
        </div>

      </div>
      )
  }
})
