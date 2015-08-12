var ResultItem = React.createClass({
  render: function(){
    return (
      <div className="event result_list_event">

        <div className="label">
          <img src={this.props.image} />
        </div>

        <div className="content">
          <div className="summary">
              {this.props.title}
              <div className="date">
                <b>Points:</b> {this.props.points}
              </div>
          </div>
              <div className="extra text">
                <em className="result_item_category">{this.props.categoryName}</em><br/>
                {this.props.description}
              </div>
              <br/>
              <button className="medium ui teal button discover_fix_button" href={this.props.link}>Fix it!</button>
              <hr/>
        </div>
      </div>
      )
  }
})
