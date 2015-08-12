var DashboardNav = React.createClass({

  render: function(){
    return(
      <div className="ui grid">

        <div className="two column row">
          <a className="massive ui button primary nav_button discover_button" href="/discover"> Find an Issue </a><br/>
          <a className="massive ui button primary nav_button discover_button" href="/issues/new"> Submit an Issue </a>
        </div>

      </div>
      )
  }
})
