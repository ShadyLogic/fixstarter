var Stream = React.createClass({

  getInitialState: function(){
    return {issues: this.props.issues}
  },

  render: function(){
    var issues = this.props.issues.map(function(issue) {
      return (
        // TODO: Call issues in Stream Item
        <div>
          <StreamItem title={issue.title} />
        </div>
        )
    });
  }
});
