var Header = React.createClass({
  render: function(){
    return (

      <div id="header">

        <Sidebar />

        <div id="mainHead">

            <FixedMenuTemplate />
            <MobileMenu />

          <div className="ui huge icon header inverted">
            <a href="/dashboard"> <i className="circular configure icon inverted"></i></a> <span className="header_text">FixStart</span>
          </div>

          <h2 className="ui header inverted">
            <span className="header_text">FixStart</span>
          </h2>
        </div>

        <img id="mainImage" src="http://i.imgur.com/LnTYPZ2.jpg" />

      </div>
      )
  }
})
