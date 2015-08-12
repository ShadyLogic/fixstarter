var IssueForm = React.createClass({

  handleSubmit: function(e){
    // this is a non-ajax POST request -- hence the jquery value grabbing
    // as a result, we don't need to grab the DOMNodes, just the values of the hidden latlon parameters
    var latlonNode = this.refs.latlon.props
    var lat = latlonNode.latValue
    var lon = latlonNode.lonValue
    $('#lat').val(lat)
    $('#lon').val(lon)

    // check to see if a pin has been dropped
    if ($('#lat').val() === "") {
      e.preventDefault();
      $('.error').text('You must drop a pin!')
      return console.log('error')
    } else { }
  },

  render: function(){
    return (
      <div className="issue_form_wrapper">
        <IssueMap ref='latlon' zip={this.props.zip} latValue={this.props.latValue} lonValue={this.props.lonValue} />
        <span className='error'></span>

        <form className="issue_new_form ui form" ref="form" action="/issues" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit} >

          <h2>Submit an issue </h2>

          <div className="field">
            <label> Issue title</label>
            <input ref="title" name="issue[title]" type="text" required />
          </div>

          <div className="field">
            <label>Description</label>
            <textarea rows="3" ref="description" name="issue[description]" type="text" required />
          </div>

          <div className="field">
            <label>Category</label>
            < CategoryDropdown categories={this.props.categories} />
          </div>

          <div className="field">
            <label>Upload an Image</label>
            <ImageUploadForm />
          </div>

          <input id="lat" ref="lat" name="issue[latitude]" type="hidden" />
          <input id="lon" ref="lon" name="issue[longitude]" type="hidden" />
          <button className="ui primary button" type="submit"> Submit </button>
        </form>

      </div>
    )
  }
})
