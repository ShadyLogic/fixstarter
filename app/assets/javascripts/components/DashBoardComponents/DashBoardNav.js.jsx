var DashboardNav = React.createClass({

  render: function(){
    return(
      <div className="dashboard_nav_wrapper">

        <div className="dashboard_nav_link">
          <a href="/discover"> Find an Issue </a>
        </div>

        <div className="dashboard_nav_link">
          <a href="#"> Submit an Issue </a>
        </div>

      </div>
      )
  }
})
