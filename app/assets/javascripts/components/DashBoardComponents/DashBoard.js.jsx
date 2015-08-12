var Dashboard = React.createClass({

  render: function(){
    return (

      <div className="ui centered grid container">



        <div className="one column row">
          <h2 className="column">  </h2>
          <h2 className="ui horizontal divider header"> Dashboard </h2>
        </div>

        <div>
          <DashboardNav />
          <br/>
        </div>

        <div className="one column row">
          
          < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} environment={this.props.environment} />
        </div>

      { /* <div className="one column row">
          < Stream streamIssues={this.state.streamIssues} />
        </div> */ }

      </div>
      )
  }
})


// <h4 className="ui horizontal divider header"> FixStart Issue Map </h4>