document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log(navigator.camera);
  function generateObjectFromForm() {
    let obj = {
      title: $("#bookName").val(),
      description: $("#bookSummary").val(),
      authorname: $("#bookAuthor").val(),
    };
    return obj;
  }

  console.log(navigator.camera);
  let pictureData = "";

  $("#filePicker").on("click", () => {
    let fromGallery = $("#pickFromGallery").is(":checked");
    let srcType = fromGallery ? 2 : 1;
    navigator.camera.getPicture(
      (data) => {
        pictureData = data;
        $("#laPhoto").attr('src', () => { return `data:image/png;base64,${pictureData}`; });
      },
      () => {},
      {
        encodingType: Camera.EncodingType.PNG,
        allowEdit: true,
        correctOrientation: true,
        sourceType: srcType
      }
    );
  });

  $("#submit").on("click", () => {
    let formData = generateObjectFromForm();
    localStorage.setItem("formdata", JSON.stringify(generateObjectFromForm()));
    sendForm(formData, pictureData);
  });
}

function sendForm(formData, pictureData) {
  let baseAddress = "";
  if (cordova.platformId === "android" || cordova.platformId === "ios") {
    baseAddress = "http://192.168.1.74:8080";

  } else if (cordova.platformId === "browser") {
    baseAddress = "http://localhost:3000";
  } 
  formData.cover = pictureData;

  let jsonData = JSON.stringify(formData);

  $.ajax({
    url: `${baseAddress}/books`,
    type: "POST",
    data: jsonData,
    contentType: "application/json",
    success: function (response) {
      $("body").append("<p> Votre livre a été envoyé avec succès !</p>");
    },
    error: function (error) {
      $("body").append(
        "<p> Une erreur est survenue lors de la soummision </p>"
      );
      console.error(error);
    },
  });
}
