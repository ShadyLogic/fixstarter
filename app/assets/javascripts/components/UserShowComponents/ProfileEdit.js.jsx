var ProfileEdit = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      bio: this.props.user.bio,
      email: this.props.user.email,
    }
  },


  render: function(){
    return (
      <div className="profile_edit_wrapper">
      <ProfilePic user={this.props.user}/>

      <p> Hello, {this.props.user.first_name} {this.props.user.last_name}.
      You can update your profile below. </p>

      <form action='/profile' method="POST"  ref="form" encType="multipart/form-data">
          <input type="hidden" name="_method" value="PUT" />

          First Name<br/>
          <input type="text" name="user[first_name]" valueLink={this.linkState("first_name")} />
          <br/>

          Last Name<br/>
          <input type="text" name="user[last_name]" valueLink={this.linkState("last_name")} />
          <br/>

          Email<br/>
          <input type="text" name="user[email]" valueLink={this.linkState("email")}/>
          <br/>

          Bio<br/>
          <textarea type="comment" name="user[bio]" valueLink={this.linkState("bio")}/>
          <br/>

          Upload a new Avatar<br/>
          < ImageUploadForm />
          <br/><br/>

          <button type="submit">Update Profile</button>

        </form>

      </div>
      )
  }
})
