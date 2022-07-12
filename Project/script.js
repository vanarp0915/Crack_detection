// Login Page
function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "user")
    {
        alert("Login Successful");
        window.location.href = "welcome.html"
    }
    else
    {
        alert("Login Failed");
    }
}

// Welcome Page

// 1.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 2.
const reader = new FileReader();
const img = new Image();

// 3.
const uploadImage = (e) => {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

// 4.
const imageLoader = document.getElementById("inputFile");
imageLoader.addEventListener("change", uploadImage);

// 5.
function download() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}

//6.
document.querySelector("button").addEventListener("click", download);

const realFileBtn = document.getElementById("inputFile");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if(realFileBtn.value){
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else
    {
        customTxt.innerHTML = "No file choosen, yet."
    }
});

