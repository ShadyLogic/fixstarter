var IssueForm = React.createClass({

  handleSubmit: function(event){
    event.preventDefault()

    var titleNode = this.refs.title.getDOMNode();
    var descriptionNode = this.refs.description.getDOMNode();
    var zipNode = this.refs.zip.getDOMNode();

    var title = titleNode.value.trim()
    var description = descriptionNode.value.trim()
    var zip = zipNode.value.trim()

    var issue = {
      title: title,
      description: description,
      zip: zip
    }

    // submit
    this.props.onIssueSubmit(issue)
  },

  render: function(){
    return (
      <div className="issue_form_wrapper">
        <form ref="form" onSubmit={this.handleSubmit} >
          Title
          <input ref="title" name="issue[title]" type="text" />
          <br/>
          Description
          <input ref="description" name="issue[description]" type="text" />
          <br/>
          Zip:
          <input ref="zip" name="issue[zip]" type="text" />
          <br/>
          Image:
          <input ref="image" name="issue[image]" type="file" />
          <input type="submit" />
        </form>
      </div>
    )
  }
})
