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
  

function popup() {
  // Create a popup window
  var popupWindow = window.open('', 'Popup Window', 'width=200,height=200');

  // Create a form inside the popup window
  var form = document.createElement('form');
  popupWindow.document.body.appendChild(form);

  // Create a text input field inside the form
  var input = document.createElement('input');
  input.type = 'float';
  input.name = 'userInput';
  form.appendChild(input);

  
  // Create a submit button inside the form
  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Submit';
  form.appendChild(submit);
}

// Add an event listener to the button




