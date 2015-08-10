var IssueForm = React.createClass({

  handleSubmit: function(event){

    // this is a non-ajax POST request -- hence the jquery value grabbing
    // as a result, we don't need to grab the DOMNodes, just the values of the hidden latlon parameters

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

        <form ref="form" action="/issues" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit} >
          <p>Title</p>
          <input ref="title" name="issue[title]" type="text" />

          <p>Description</p>
          <input ref="description" name="issue[description]" type="text" />

          <p>Image</p>
          <ImageUploadForm />

          <input id="lat" ref="lat" name="issue[latitude]" type="hidden" />
          <input id="lon" ref="lon" name="issue[longitude]" type="hidden" />
          <input type="submit" />
        </form>

      </div>
    )
  }
})
