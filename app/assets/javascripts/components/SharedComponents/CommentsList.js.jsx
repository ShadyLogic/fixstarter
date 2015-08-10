var CommentsList = React.createClass({
  render: function(){
    var Comments = this.props.comments.map(function(comment) {
      return < Comment key={comment.id} content={comment.content} user={comment.user} />
    });

    return (
      <div className="comments_list">
        <h3> Comments: </h3>
        {Comments}
        {this.props.current_user ?
            < CommentBox path = {this.props.path} current_user= {this.props.current_user} />
          :
            null
        }
      </div>
    )
  }
})
