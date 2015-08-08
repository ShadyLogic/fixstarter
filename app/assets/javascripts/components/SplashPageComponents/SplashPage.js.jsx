var SplashPage = React.createClass({

  render: function(){
    return (
      <div className = "splash_page">
        < SplashHeader />
        < br/>
        < Stream streamIssues={this.props.streamIssues} />
      </div>
      )
  }
})
