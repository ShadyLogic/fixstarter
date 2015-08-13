var Footer = React.createClass({
  render: function(){
    return (
      <div id="footer">
        <div className="ui grid three column stackable">

          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular list icon"></i>
            </div>

            <div className="ui list">

              <a href="/issues/new" className="item">
                <i className="plus icon"></i>
                Submit an Issue
              </a>

              <a href="/dashboard" className="item">
                <i className="home icon"></i>
                Dashboard
              </a>

              <a href="/team" className="item">
                <i className="configure icon"></i>
                About Us
              </a>

            </div>
          </div>

          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular configure icon"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore mag
            </p>
          </div>

          <div className="column">
            <div className="ui horizontal icon divider">
              <i className="circular configure icon"></i>
            </div>
            <StreamFooter streamIssues={this.props.streamIssues} />
          </div>

        </div>
      </div>
      )
  }
})
