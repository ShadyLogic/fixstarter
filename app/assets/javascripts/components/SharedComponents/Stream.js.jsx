var Stream = React.createClass({

  render: function(){
    var streamIssues = this.props.streamIssues.map(function(issue) {
      return < StreamItem key={issue.id} id={issue.id} title={issue.title} description={issue.description} username={issue.username} imageUrl={issue.imageUrl} />
    });

    return (
      <div className="stream_wrapper">
        {streamIssues}
      </div>
    )
  }
});
