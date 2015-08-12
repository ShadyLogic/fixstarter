var SplashHeader = React.createClass({

  render: function(){

    return (
      <div className="header_wrapper">
        <a className="ui button" href="/users/sign_in"> Login </a>
        <br/>
        <br/>
        <a className="ui button" href="/users/sign_up"> Sign Up </a>
      </div>
    )
  }
})
