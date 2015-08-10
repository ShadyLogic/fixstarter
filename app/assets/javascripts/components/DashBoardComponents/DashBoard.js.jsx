var Dashboard = React.createClass({

  render: function(){
    return (
      <div className="dashboard_page">
        <h1> Dashboard </h1>
        < DashboardNav />
        < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} />
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
