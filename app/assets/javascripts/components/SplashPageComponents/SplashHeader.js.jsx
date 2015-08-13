var SplashHeader = React.createClass({

  render: function(){

    return (
      <div id="splash">
        <div id="mainSplash">

          <div className="ui huge icon header">
            <div className="ui huge icon header inverted">
              <span className="splash_title"> <i className="circular configure icon "></i> FixStart </span>
              <br/>
              <span className="splash_slogan"> crowdsourced community upkeep </span>
            </div>
          </div>
          <br/>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_up"> Sign Up </a>
          </div>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_in"> Log In</a>
          </div>

        </div>
      </div>
    )
  }
})

