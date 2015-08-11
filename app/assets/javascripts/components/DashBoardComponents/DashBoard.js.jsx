var Dashboard = React.createClass({

  getInitialState: function(){
    return {streamIssues: this.props.streamIssues}
  },

  componentDidMount: function() {
    if (this.props.environment == 'development'){
      var socket = io('localhost:5001')
      console.log("DEVELOPMENT-STREAM")
    }else{
      var socket = io("https://node-fixstart.herokuapp.com")
      console.log("PRODUCTION")
    }
    var self = this
    socket.on('stream', function(data) {
      console.log('stream-updated success')
      self.refreshStream(data)
    })

    console.log(this.props.allOpenIssues)
  },

  refreshStream: function(data) {
    this.setState({streamIssues: data})
  },

  render: function(){
    return (
      <div className="dashboard_page">
        <h1> Dashboard </h1>
        < DashboardNav />
        < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} environment={this.props.environment} />
        < Stream streamIssues={this.state.streamIssues} />
      </div>
      )
  }
})
