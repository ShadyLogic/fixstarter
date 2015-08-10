var StreamItem = React.createClass({

  render: function(){
    return(
      <div className="stream_item_wrapper">
        <a className="stream_title" href={"/issues/"+this.props.id} > {this.props.title} </a>
        <br />
        <br />
        {this.props.description}
        <br />
        <br />
        {this.props.username}
        <br />
        <br />
        <img className="stream_image" src= {this.props.imageUrl} />
        <br />
        <br />
      </div>
      )
  }

})
