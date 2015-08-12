var UserFixedList = React.createClass({
  render: function(){

    var Fixes = this.props.fixes.map(function(fix) {
      return < UserFixedItem key={fix.id} id ={fix.id} issue_id={fix.issue_id} title={fix.title} image_url={fix.image_url} />
    });



    return (
      <div className="user_issues_list_wrapper">

        <h3 className="ui header"> Issues Fixed</h3>

        <div id="footer_stream" className="ui feed small">
        {Fixes}
        </div>

      </div>
      )
  }
})
