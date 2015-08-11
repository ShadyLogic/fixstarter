var SplashHeader = React.createClass({

  render: function(){

    return (
      <div className="header_wrapper">
        <h1> FIXSTART </h1>
        <h3> Where you can fix all the shits </h3>
        <a className="ui button" href="/users/sign_in"> Login </a>
        <br/>
        <br/>
        <a className="ui button" href="/users/sign_up"> Sign Up </a>
      </div>
    )
  }
})
