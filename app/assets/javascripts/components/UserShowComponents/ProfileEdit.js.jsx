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

      <form className="ui form" action='/profile' method="POST"  ref="form" encType="multipart/form-data">
          <input type="hidden" name="_method" value="PUT" />

          <div className="field">
          <label>First name</label>
          <input type="text" name="user[first_name]" valueLink={this.linkState("first_name")} />
          </div>

          <div className="field">
          <label>Last name</label>
          <input type="text" name="user[last_name]" valueLink={this.linkState("last_name")} />
          </div>

          <div className="field">
          <label>Email</label>
          <input type="text" name="user[email]" valueLink={this.linkState("email")}/>
          </div>

          <div className="field">
          <label>Bio</label>
          <textarea rows="2" type="comment" name="user[bio]" valueLink={this.linkState("bio")}/>
          </div>

          <div className="field">
          <label>Upload a new Avatar</label>
          < ImageUploadForm />
          </div>

          <button className="ui primary button" type="submit">Update Profile</button>

        </form>

        <br></br>

      </div>
      )
  }
})
