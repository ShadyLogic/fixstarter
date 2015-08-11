var Dashboard = React.createClass({

  getInitialState: function(){
    return {streamIssues: this.props.streamIssues}
  },

  componentDidMount: function() {
    var socket = io('localhost:5001')
    var self = this
    socket.on('stream', function(data) {
      console.log('stream-updated success')
      self.refreshStream(data)
    })
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
          < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} />
        </div>

        <div className="one column row">
          < Stream streamIssues={this.state.streamIssues} />
        </div>

      </div>
      )
  }
})
