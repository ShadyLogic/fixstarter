var RegisterForm = React.createClass({

  render: function(){

    return (
      <div className ="register_form">
        <h3> Register </h3>
        <form>
          Email
          <input type="text" />
          <br/>
          Password
          <input type="password" />
          <br/>
          First Name
          <input type="text" />
          <br/>
          Last Name
          <input type="text" />
          <br/>
          Zip
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
      )
  }
})
