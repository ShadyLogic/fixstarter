var Comment = React.createClass({
  render: function(){
    return (
      <div className="comment">
        <p>{this.props.user}: {this.props.content}</p>
      </div>
      )
  }
})
