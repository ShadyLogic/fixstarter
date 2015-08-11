var ResultList = React.createClass({
  render: function() {
        var resultNodes = this.props.results.map(function(result){
          return (
            <ResultItem title={result.title} description={result.description} link={result.link} categoryName={result.category_name} >
            </ResultItem>
            );
        });
      return (
        <div className="result_list_wrapper">
          {resultNodes}
        </div>
    );
  }

})
