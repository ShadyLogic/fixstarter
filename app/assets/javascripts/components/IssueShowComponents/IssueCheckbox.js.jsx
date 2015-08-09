var IssueCheckbox = React.createClass({
  render: function(){
    return (
      <div className="issue_checkbox">
        <form>
          <input type="checkbox" name="watch" value="Watch" />Watch <br/>
          <input type="checkbox" name="flag" value="Flag" />Flag
        </form>
      </div>
      )
  }
})
