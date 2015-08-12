var IssueHeader = React.createClass({
  render: function(){

    var categories = this.props.categories.map(function(category){
      return <li>{category.name}</li>
    })

    return (
      <div className="issue_header">

      <h2 className="ui header">{this.props.issue.title} <span className="c-grey l-7 pos-r">[{this.props.issue.status.toUpperCase()}]</span> </h2>

      { this.props.current_user ?
        <div>

          < IssueVotes upvotes={this.props.upvotes} current_user_upvoted={this.props.current_user_upvoted} current_user_id={this.props.current_user_id} issue={this.props.issue} current_user = {this.props.current_user} />

          <br></br> <p> {this.props.upvotes} FixStart community members have up-voted this issue </p>

        </div>
      :
        <p> {this.props.upvotes} FixStart community members have up-voted this issue </p>
      }


      <h4 className="ui horizontal divider header">
         Description
      </h4>
        < MediaCard image_url={this.props.issue.image_url} description={this.props.issue.description} />

      <h4 className="ui horizontal divider header">
        Categories
      </h4>
        <p> {categories} </p>


        { this.props.current_user ?
          <div>
            <h4 className="ui horizontal divider header">
               Your stats
            </h4>
              < IssueCheckbox current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} issue={this.props.issue} />

            { this.props.current_user_created_issue ?
              < IssueOpenClose issue={this.props.issue} />
            :
              null
            }

          </div>
        :
          < IssueStatus status={this.props.issue.status} />
        }



      </div>
      )
  }
})
