var StreamItem = React.createClass({

  render: function(){
    return(
      <div className="stream_item_wrapper">
        <a href={"/issues/"+this.props.id} > title: {this.props.title} </a>
        <br />
        <br />
        description: {this.props.description}
        <br />
        <br />
        username: {this.props.username}
        <br />
        <br />
        imageUrl: {this.props.imageUrl}
        <br />
        <br />
      </div>
      )
  }

})
