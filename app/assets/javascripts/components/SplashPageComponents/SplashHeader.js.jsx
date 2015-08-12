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

          <h2 className="ui header inverted">
            <i className="configure icon inverted"> </i> Fix. Shit. Today.
          </h2>

        </div>
        <img id="splashImage" src="http://i.imgur.com/hNp8q7C.jpg" />

      </div>
    )
  }
})

