var StreamFooterItem = React.createClass({

  render: function(){
    return(
      <div className="event">

        <div className="label">
          <a href={"/issues/"+this.props.id} > <img src={this.props.imageUrl} /> </a>
        </div>

        <div className="content">
          <a href={"/issues/"+this.props.id} > <div> {this.props.description} </div> </a>
          <a href={"/issues/"+this.props.id} > <div> {this.props.username} </div> </a>
        </div>
      </div>
      )
  }

})
