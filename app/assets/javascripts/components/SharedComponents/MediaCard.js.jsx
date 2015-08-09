var MediaCard = React.createClass({
  render: function(){
    return (
      <div className="media_card">
        <h3> Media Card </h3>
        < MediaImage image_url={this.props.image_url} />
        < MediaText description={this.props.description} />
      </div>
    )
  }
})
