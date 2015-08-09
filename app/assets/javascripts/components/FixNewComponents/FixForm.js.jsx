var FixForm = React.createClass({

  handleSubmit: function(event){
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
  },

  render: function(){
    return (
      <div className="fix_form_wrapper">
        <form ref="form" onSubmit={this.handleSubmit} >
          Name The Fix:
          <input ref="title" name="fix[title]" type="text" />
          <br/>
          Describe the Fix:
          <input ref="description" name="fix[description]" type="text" />
          <br/>
          Upload an Image of Showing the Fix:
          <input ref="image" name="fix[image]" type="file" />
          <input type="submit" />
        </form>
      </div>
      )
  }
})
