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
        <canvas id="myCanvas" width="50" height="50" >
        </canvas><br/>
        <input id="image" type="file" accept="image/*;capture=camera" name="image" onChange={this.handleImage} />
      </div>
      )
  }
})
