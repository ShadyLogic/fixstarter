var Footer = React.createClass({
  render: function(){
    return (
      <div id="footer">
        <div className="ui grid">

          <div className="fourteen wide centered wide column">
            <div className="ui horizontal icon divider">
              <i className="circular list icon"></i>
            </div>
            <StreamFooter streamIssues={this.props.streamIssues} />
          </div>

        </div>
      </div>
      )
  }
})
