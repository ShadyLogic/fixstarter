var IssueForm = React.createClass({

  handleSubmit: function(event){
    event.preventDefault()

    var titleNode = this.refs.title.getDOMNode();
    var descriptionNode = this.refs.description.getDOMNode();
    var zipNode = this.refs.zip.getDOMNode();

    var title = titleNode.value.trim()
    var description = descriptionNode.value.trim()
    // var zip = zipNode.value.trim()

    var lat = latNode.value.trim()
    var lon = lonNode.value.trim()

    var issue = {
      title: title,
      description: description,
      zip: zip,
      lat: lat,
      lon: lon,
    }

    // submit
    this.props.onIssueSubmit(issue)
  },


  // <p>Zip</p>
  // <input ref="zip" name="issue[zip]" type="text" />
  render: function(){
    return (
      <div className="issue_form_wrapper">
      <IssueMap zip={this.props.zip} />

        <form ref="form" onSubmit={this.handleSubmit} >
          <p>Title</p>
          <input ref="title" name="issue[title]" type="text" />

          <p>Description</p>
          <input ref="description" name="issue[description]" type="text" />

          
          <p>Image</p>
          <input ref="image" name="issue[image]" type="file" />

          <input ref="lat" name="issue[lat]" type="hidden" value='' />
          <input ref="lon" name="issue[lon]" type="hidden" value='' />

          <input type="submit" />
        </form>
      </div>
    )
  }
})
