var IssueForm = React.createClass({
  render: function(){
    return (
      <div className="issue_form_wrapper">
        <form>
          Title
          <input type="text" />
          <br/>
          Description
          <input type="text" />
          <br/>
          Zip Code:
          <input type="text" />
          <br/>
          Image:
          <input type="file" />
          <input type="submit" />
        </form>
      </div>
    )
  }
})
