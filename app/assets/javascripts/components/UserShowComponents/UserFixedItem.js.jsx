
var UserFixedItem = React.createClass({
  render: function(){
    return (
      <div className="event">

      <div className="label">
        <a href={"/issues/" + this.props.issue_id + "/fixes/" + this.props.id} > <img src={this.props.image_url} /> </a>
      </div>

      <div className="content">
        <div className="summary">
            <a href={"/issues/" + this.props.issue_id + "/fixes/" + this.props.id} > {this.props.title} </a>
        </div>
      </div>

      </div>
      )
  }
})
