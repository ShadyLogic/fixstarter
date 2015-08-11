var StreamFooter = React.createClass({

  render: function(){
    var streamIssues = this.props.streamIssues.map(function(issue) {
      return < StreamFooterItem key={issue.id} id={issue.id} title={issue.title} description={issue.description} username={issue.username} imageUrl={issue.imageUrl} />
    });

    return (
      <div className="ui feed small">
        {streamIssues}
      </div>
    )
  }
});
