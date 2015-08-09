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
