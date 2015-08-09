App = {};

App.request = function(method, path, data){
  return new Promise(function(resolve, reject){
    var request = $.ajax({
      url:      path,
      method:   method,
      data:     data,
      dataType: "json"
    });

    request.done(function(serverData){
      resolve(serverData)
    });

    request.fail(function(serverData){
      reject(serverData)
    });
  });
};

App.goto = function(path){
  history.pushState({}, document.title, path);
  $(window).trigger('pushstate');
};

App.router = function(path){
  if (path === '/')                         return <HomePage />;
  if (path.match(/^\/questions\/(\d+)\/comments$/))   return <CommentShowPage  question_id={RegExp.$1} />;
  return <h1>Page Not Found</h1>
};
