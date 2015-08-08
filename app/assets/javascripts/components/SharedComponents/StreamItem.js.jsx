var StreamItem = React.createClass({

  render: function(){
    return(
      <div>
        title: {this.props.title}
        <br />
        <br />
        description: {this.props.description}
        <br />
        <br />
        username: {this.props.username}
        <br />
        <br />
        imageUrl: {this.props.imageUrl}
      </div>
      )
  }

})
