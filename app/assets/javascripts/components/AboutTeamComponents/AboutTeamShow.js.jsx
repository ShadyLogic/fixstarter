var AboutTeamShow = React.createClass({
  render: function(){
    return (
      <div className="about_team_show_page">

        <div className="ui stackable three column centered grid">
            <div className=" column">
              < CommunityStandards />
              < CategoryDescriptions />
            </div>

            <div className=" column">
              < TeamMediaCards />
            </div>
        </div>

      </div>
      )
  }
})
