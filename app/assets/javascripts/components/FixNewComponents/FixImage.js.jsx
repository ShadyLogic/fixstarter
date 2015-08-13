var FixImage = React.createClass({
  render: function(){
    return(
      <div className="ui card">
        <div className="image">
          <img src={this.props.issue.image_url}/>
        </div>
      </div>
      )
  }
})
