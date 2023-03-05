function uploadPicture() {
    document.getElementById("pictureInput").click();
  }
  
  document.getElementById("pictureInput").addEventListener("change", function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      document.body.appendChild(img);
    };
  });
  
