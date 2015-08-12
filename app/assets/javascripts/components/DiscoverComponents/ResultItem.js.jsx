var ResultItem = React.createClass({
  render: function(){
    return (
      <div className="event">

        <div className="label">
          <img src={this.props.image} />
        </div>

        <div className="content">
          <div className="summary">
              {this.props.title}
              {this.props.category_name}
              <div className="date">
                <b>Points:</b> {this.props.points}
              </div>
          </div>
              <div className="extra text">
                {this.props.description}
              </div>
              <a href={this.props.link} > Fix it! </a>
        </div>
      </div>
      )
  }
})
