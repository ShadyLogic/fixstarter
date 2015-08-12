var SplashHeader = React.createClass({

  render: function(){

    return (
      <div id="splash">
        <div id="mainSplash">

          <div className="ui huge icon header">
            <div className="ui huge icon header inverted">
              <i className="circular configure icon "></i> Fix. Shit. Today.
            </div>
          </div>
          <br/>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_up"> Sign Up </a>
          </div>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_in"> Sign In</a>
          </div>

        </div>
      </div>
    )
  }
})

