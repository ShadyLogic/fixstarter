var CommentBox = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var path = this.props.path
    var data = React.findDOMNode(this.refs.comment).value
    new_comment = App.jacobs_request('POST', path, data)

    $('#added_comments').append('<p>'+this.props.current_user.first_name+': '+data+'</p>')
    React.findDOMNode(this.refs.comment).value = ''
  },

  render: function(){
    return (
      <div id="comment_box" className="comment_box" ref="wrapper">
        <div id="added_comments">
        </div>
        <h5> Add A Comment: </h5>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="5" cols="40" ref="comment"></textarea><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})
