var IssueDescription = React.createClass({
  render: function(){

    var categories = this.props.categories.map(function(category){
      return <li key={category.id}>{category.name}</li>
    })

    return (
      <div className="issue_description_wrapper">

        <h4 className="ui horizontal divider header">
           Description
        </h4>
          < MediaCard image_url={this.props.issue.image_url} description={this.props.issue.description} />

        <h4 className="ui horizontal divider header">
          Categories
        </h4>
          <p> {categories} </p>

      </div>
      )
  }
})
