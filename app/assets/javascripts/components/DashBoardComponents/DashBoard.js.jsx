var Dashboard = React.createClass({

  render: function(){
    return (
      <div className="dashboard_page">
        <h1> Dashboard </h1>
        < DashboardNav />
        < DashboardMap />
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
