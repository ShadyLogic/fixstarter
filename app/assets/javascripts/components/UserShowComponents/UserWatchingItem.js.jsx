var UserWatchingItem = React.createClass({
  render: function(){
    return (
      <div className="event">

        <div className="label">
          <a href={"/issues/"+this.props.id} > <img src={this.props.image_url} /> </a>
        </div>

        <div className="content">
          <div className="summary">
              <a href={"/issues/"+this.props.id} > {this.props.title} </a>
              <div className="date">
                <b>Status:</b> {this.props.status}
              </div>
          </div>
        </div>

      </div>
      )
  }
})
