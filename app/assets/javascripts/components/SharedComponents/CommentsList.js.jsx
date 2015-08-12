var CommentsList = React.createClass({
  render: function(){
    var Comments = this.props.comments.map(function(comment) {
      return < Comment key={comment.id} content={comment.content} user={comment.user} user_id={comment.user_id}/>
    });

    return (
      <div className="comments_list">
        <h4 className="ui horizontal divider header">
         Post a comment
        </h4>

        <div className="ui comments">
          {Comments}
        </div>

        {this.props.current_user ?
            < CommentBox path = {this.props.path} current_user= {this.props.current_user} />
          :
            null
        }

      </div>
    )
  }
})
