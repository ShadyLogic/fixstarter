var SplashPage = React.createClass({

	getInitialState: function(){
	  return {streamIssues: this.props.streamIssues}
	},

	componentDidMount: function() {
	  if (this.props.environment === 'production'){
      var socket = io("https://node-fixstart.herokuapp.com")
    }else{
      var socket = io('localhost:5001')
    }
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
      <div className = "splash_page">
        < SplashHeader />
        < br/>
        < Stream streamIssues={this.state.streamIssues} />
      </div>
      )
  }
})
