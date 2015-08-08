var RegisterLogin = React.createClass({

  render: function(){

    return (
      <div className="register_login_page">
        <h1> Welcome to the Register Login Page U Suck Keke </h1>

        <RegisterForm />
        <LoginForm />
        <Stream streamIssues={this.props.streamIssues} />

      </div>
      )
  }
})
