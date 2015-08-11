var SplashPage = React.createClass({

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
      <div className = "ui stackable one column centered grid container splash_page">
        < SplashHeader />
        < br/>
        < Stream streamIssues={this.state.streamIssues} />
      </div>
      )
  }
})
