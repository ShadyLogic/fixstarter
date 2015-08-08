var IssueShow = React.createClass({
  render: function(){
    return (
      <div className="issue_show">
        <h2>Issue - </h2>
        < IssueHeader />
        < FixList />
        < MediaCard />
        < CommentsList />
      </div>
      )
  }
})
