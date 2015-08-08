var Dashboard = React.createClass({

  render: function(){
    return (
      <div>
        <h3> Dashboard </h3>
        < DashboardNav />
        < DashboardMap />
        < IssueNew />
      </div>
      )
  }
})
