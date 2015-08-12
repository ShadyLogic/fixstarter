var AboutTeamShow = React.createClass({
  render: function(){
    return (
      <div className="about_team_show_page">

        <div className="ui stackable two column grid">
            <div className="column">
              < TeamMediaCards />
            </div>

            <div className="column">
              < CommunityStandards />
              < CategoryDescriptions />
            </div>
        </div>

      </div>
      )
  }
})
