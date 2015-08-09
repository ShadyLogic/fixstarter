var Stream = React.createClass({

  // getInitialState: function(){
  //   return {streamIssues: this.props.streamIssues}
  // },

  render: function(){
    var streamIssues = this.props.streamIssues.map(function(issue) {
      return < StreamItem id={issue.id} title={issue.title} description={issue.description} username={issue.username} image_url={issue.imageUrl} />
    });

    return (
      <div className="stream_wrapper">
        <h3> Streaming Issues: </h3>
        {streamIssues}
      </div>
  )
  }
});
