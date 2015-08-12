var LoginForm = React.createClass({

  render: function(){

    return (

      <div className="ui stackable one column centered grid container login_form">
        <h3> Login </h3>
        <form className="ui form">
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
          <button className="ui button" type="submit">Submit</ button>
        </form>

      </div>
      )
  }
})
