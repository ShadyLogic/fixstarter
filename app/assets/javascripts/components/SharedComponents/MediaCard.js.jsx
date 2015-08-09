var MediaCard = React.createClass({
  render: function(){
    return (
      <div className="media_card">
        <h4> Media Card </h4>
        < MediaImage image_url={this.props.image_url} />
        < MediaText description={this.props.description} />
      </div>
    )
  }
})
