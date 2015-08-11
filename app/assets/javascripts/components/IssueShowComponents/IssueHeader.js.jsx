var IssueHeader = React.createClass({
  render: function(){

    var categories = this.props.categories.map(function(category){
      return <h4> {category.name} </h4>
    })

    return (
      <div className="issue_header">

        <h2>{this.props.issue.title}</h2>
        {categories}

        < IssueVotes upvotes={this.props.upvotes} current_user_upvoted={this.props.current_user_upvoted} current_user_id={this.props.current_user_id} issue={this.props.issue} current_user = {this.props.current_user} />

        { this.props.current_user ?
          <div>
            < IssueCheckbox current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} issue={this.props.issue} />


        < IssueOpenClose current_user_created_issue={this.props.current_user_created_issue} />

        < IssueStatus status={this.props.issue.status} />

            < SubmitFixButton issueID={this.props.issue.id} />
          </div>
        :
          < IssueStatus status={this.props.issue.status} />
        }

      </div>
      )
  }
})
