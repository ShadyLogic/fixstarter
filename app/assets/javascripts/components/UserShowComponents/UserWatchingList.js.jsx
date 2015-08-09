var UserWatchingList = React.createClass({
  render: function(){

    var Watches = this.props.watches.map(function(watch) {
      return < UserWatchingItem key={watch.id} issue_id={watch.issue_id} title={watch.issue.title} image_url={watch.issue.image_url} />
    });

    return (
      <div className="user_watching_list_wrapper">
      <h2> This is a list of items you are watching. </h2>
      {Watches}
      </div>
      )
  }
})
