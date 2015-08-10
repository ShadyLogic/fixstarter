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

App.jacobs_request = function(method, path, data){

    var request = $.ajax({
      url:      path,
      method:   method,
      data:     {content: data}
    });

    request.done(function(serverData){
      console.log("SUCCESS")
      return serverData
    });

    request.fail(function(serverData){
      console.log("FAILURE")
      return serverData
    });

};
