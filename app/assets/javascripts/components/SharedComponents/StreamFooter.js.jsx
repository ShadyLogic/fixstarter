var StreamFooter = React.createClass({

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

    console.log(this.props.streamIssues)
  },

  refreshStream: function(data) {
    this.setState({streamIssues: data})
  },

  render: function(){
    var streamIssues = this.state.streamIssues.map(function(issue) {
      return < StreamFooterItem key={issue.id} id={issue.id} title={issue.title} description={issue.description} username={issue.username} imageUrl={issue.imageUrl} />
    });

    return (
      <div id="footer_stream" className="ui feed small">
        {streamIssues}
      </div>
    )
  }
});
