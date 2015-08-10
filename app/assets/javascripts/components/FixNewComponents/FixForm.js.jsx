var FixForm = React.createClass({


  /*  handleSubmit: function(event){

   event.preventDefault()

    var titleNode = this.refs.title.getDOMNode();
    var descriptionNode = this.refs.description.getDOMNode();

    var title = titleNode.value.trim()
    var description = descriptionNode.value.trim()
    var issue_id = this.props.issue.id

    var fix = {
      title: title,
      description: description,
      issue_id: issue_id,
    }

    // submit
    this.props.onFixSubmit(fix)

  }, */

  render: function(){
    return (
      <div className="fix_form_wrapper">
        <form action={'/issues/' + this.props.issue.id + '/fixes'} method="post"  /* onSubmit={this.handleSubmit} */  ref="form" encType="multipart/form-data">
          Name The Fix:
          <input ref="title" name="title" type="text" />
          <br/>
          Describe the Fix:
          <input ref="description" name="description" type="text" />
          <br/>
          Upload an Image of Showing the Fix:
          <ImageUploadForm />
          <input type="submit" />
        </form>
      </div>
      )
  }
})
