var ImageUploadForm = React.createClass({

  handleImage: function(e){
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');

      console.log(e)
      var reader = new FileReader();
      reader.onload = function(event){
          var img = new Image();
          img.onload = function(){
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img,0,0);
          }
          img.src = event.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
  },

  render: function(){
    return (
      <div>
        <form action="/images" method="POST" encType="multipart/form-data">
          <input id="image" type="file" accept="image/*;capture=camera" name="image" onChange={this.handleImage} />
          <input type="submit" value="Submit" />
        </form>

        <canvas id="myCanvas" width="200" height="200" style={{border: "1px solid black"}} >
        </canvas>
      </div>
      )
  }
})
