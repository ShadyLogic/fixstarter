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
        <form onSubmit={this.handleSubmit}>
          <textarea rows="5" cols="40" ref="comment"></textarea><br/>
          <button className="ui primary button" type="submit">Post a reply</button>
        </form>
      </div>
    )
  }
})
