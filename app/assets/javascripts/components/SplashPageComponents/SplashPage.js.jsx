var SplashPage = React.createClass({

  render: function(){
    return (
      <div>
        <SplashHeader />
        <Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
