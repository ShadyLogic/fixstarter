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
          <a className="ui huge inverted button splash_nav_button" href="/users/sign_up"> Sign Up </a>
          <a className="ui huge inverted button splash_nav_button" href="/users/sign_in"> Sign In</a>

          <h2 className="ui header inverted">
            <i className="configure icon inverted"> </i> Fix. Shit. Today.
          </h2>

        </div>
      </div>
    )
  }
})

