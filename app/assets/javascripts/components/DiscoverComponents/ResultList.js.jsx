var ResultList = React.createClass({
  render: function() {
        var resultNodes = this.props.results.map(function(result){
          return (
            <ResultItem title={result.title} description={result.description} link={result.link} points={result.points} categoryName={result.category_name} image={result.image} >
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
