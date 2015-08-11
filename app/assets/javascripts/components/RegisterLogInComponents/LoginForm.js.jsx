var LoginForm = React.createClass({

  render: function(){

    return (

      <div className="ui stackable one column centered grid container login_form">
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
