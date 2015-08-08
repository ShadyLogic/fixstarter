var SplashPage = React.createClass({

  render: function(){
    return (
      <div>
        <SplashHeader />
        <Stream issues={this.props.issues} />
      </div>
      )
  }
})
