var UserFixedList = React.createClass({
  render: function(){

    var Fixes = this.props.fixes.map(function(fix) {
      return < UserFixedItem key={fix.id} title={fix.title} image_url={fix.image_url} />
    });



    return (
      <div className="user_issues_list_wrapper">
      <h2> You have fixed the following items</h2>
      {Fixes}
      </div>
      )
  }
})
