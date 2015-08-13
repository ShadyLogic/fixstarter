var MediaCard = React.createClass({
  render: function(){
    return (
      <div className="media_card">
        <div className="ui card centered">
          <div className="image">
            <img src={this.props.image_url}></img>
          </div>
          <div className="content">
            <div className="description">
              <b>Description:</b> {this.props.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

