var Header = React.createClass({
  render: function(){
    return (

      <div id="header">

        <Sidebar />

        <div id="mainHead">

            <FixedMenuTemplate />
            <MobileMenu />

          <div className="ui huge icon header inverted">
            <i className="circular configure icon inverted"></i> FixStart
          </div>

          <h2 className="ui header inverted">
            <i className="configure icon inverted"> </i> FixStart
          </h2>
        </div>

        <img id="mainImage" src="http://i.imgur.com/LnTYPZ2.jpg" />

      </div>
      )
  }
})
