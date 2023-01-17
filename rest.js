// image changer
setInterval(changeImage,1000);
 var myImage =  document.getElementById("change");
 var imageArray = ["cnm20.jpg","cnm9.JPG", "cnm7.JPG", "cnm16.JPG", "cnm13.JPG"];
 var imageIndex = 0;

 function changeImage() {
     myImage.setAttribute("src",imageArray[imageIndex]);
     imageIndex++;
     if (imageIndex >= imageArray.length) {
         imageIndex = 0;
     }
 }
