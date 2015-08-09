var UserFixedList = React.createClass({
  render: function(){
    return (
      <div className="user_issues_list_wrapper">
      <h2> You have fixed the following items</h2>
      < UserFixedItem fixes={this.props.fixes} />
      </div>
      )
  }
})
