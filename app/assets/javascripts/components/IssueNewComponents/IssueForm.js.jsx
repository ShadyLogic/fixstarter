var IssueForm = React.createClass({

  handleSubmit: function(event){

    // this is a non-ajax POST request -- hence the jquery value grabbing
    // as a result, we don't need to grab the DOMNodes, just the values of the hidden latlon parameters

    // var titleNode = this.refs.title.getDOMNode();
    // var descriptionNode = this.refs.description.getDOMNode();
    // var title = titleNode.value.trim()
    // var description = descriptionNode.value.trim()

    // var issue = {
    //   title: title,
    //   description: description,
    //   latitude: lat,
    //   longitude: lon,
    // }

    // submit
    // this.props.onIssueSubmit(issue)

    var latlonNode = this.refs.latlon.props
    var lat = latlonNode.latValue
    var lon = latlonNode.lonValue

    $('#lat').val(lat)
    $('#lon').val(lon)
  },

  render: function(){
    return (
      <div className="issue_form_wrapper">
      <IssueMap ref='latlon' zip={this.props.zip} latValue={this.props.latValue} lonValue={this.props.lonValue} />

        <form ref="form" onSubmit={this.handleSubmit} >
          <p>Title</p>
          <input ref="title" name="issue[title]" type="text" />

          <p>Description</p>
          <input ref="description" name="issue[description]" type="text" />

          <p>Image</p>
          <input ref="image" name="issue[image]" type="file" />

          <input id="lat" ref="lat" name="issue[lat]" type="hidden" />
          <input id="lon" ref="lon" name="issue[lon]" type="hidden" />
          <input type="submit" />
        </form>

      </div>
    )
  }
})
