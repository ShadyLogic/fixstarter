var LoginForm = React.createClass({

  render: function(){

    return (

      <div className="login_form">
        <h3> Login </h3>
        <form>
          Email
          <input type="text" />
          <br/>
          Password
          <input type="password" />
          <input type="submit" />
        </form>
      </div>
      )
  }
})
