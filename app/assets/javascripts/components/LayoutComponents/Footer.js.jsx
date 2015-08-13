var Footer = React.createClass({
  render: function(){
    return (
      <div id="footer">
        <div className="ui grid">

          <div className="fourteen wide centered wide column">
            <div className="ui horizontal divider">
              <span className="footer_header"> NEW ISSUES </span>
            </div>
            <StreamFooter streamIssues={this.props.streamIssues} />
          </div>

        </div>
      </div>
      )
  }
})
