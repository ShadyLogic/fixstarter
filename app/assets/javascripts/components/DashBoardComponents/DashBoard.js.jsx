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

      <div className="ui centered grid container">

        <div className="one column row">
          <h2 className="column"> Dashboard </h2>
        </div>

        <div>
          <DashboardNav />
        </div>

        <div className="one column row">
          < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} environment={this.props.environment} />
        </div>

        <div className="one column row">
          < Stream streamIssues={this.state.streamIssues} />
        </div>

      </div>
      )
  }
})
