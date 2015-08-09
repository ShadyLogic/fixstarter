var MediaImage = React.createClass({
  render: function(){
    return (
      <div className="media_image">
        <img src={this.props.image_url} />
      </div>
    )
  }
})
