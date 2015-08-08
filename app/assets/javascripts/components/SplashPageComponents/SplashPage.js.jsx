var SplashPage = React.createClass({

  render: function(){
    return (
      <div>
        < SplashHeader />
        < br/>
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
