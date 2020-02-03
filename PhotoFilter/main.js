window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var orimage = null;
var grayimg = null;
var redimg = null;
var blueimg = null;
var greenimg = null;
var yellowimg = null;
var hstripimg = null;
var vstripimg = null;
  var imgcanvas = document.getElementById("can");


function uploadimg() {
    var fileinput = document.getElementById("finput");
  orimage = new SimpleImage(fileinput);
  orimage.drawTo(imgcanvas);
  grayimg = new SimpleImage(fileinput);  
  redimg = new SimpleImage(fileinput);
  blueimg = new SimpleImage(fileinput);
  greenimg = new SimpleImage(fileinput);
  yellowimg = new SimpleImage(fileinput);
  hstripimg = new SimpleImage(fileinput);
  vstripimg = new SimpleImage(fileinput);
}

function imageisloaded(img) {
  if (img == null || ! img.complete()) {
    alert("Image is not loaded.");
    return;
  }
}
  
function grayscale() {
  if (imageisloaded(grayimg)) {
 for (var pixel of grayimg.values()) {
   var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
   pixel.setRed(avg);
   pixel.setGreen(avg);
   pixel.setBlue(avg);
 } 
 grayimg.drawTo(imgcanvas);
  }
}

function red() {
  if (imageisloaded(redimg)) {
  for (var pixel of redimg.values()) {
    pixel.setRed(255);
  }
  redimg.drawTo(imgcanvas); 
  }
}

function blue() {
  if (imageisloaded(img)) {
  for (var pixel of blueimg.values()) {
    pixel.setBlue(255);
  }
  blueimg.drawTo(imgcanvas); 
  }
}

function red() {
  if (imageisloaded(img)) {
  for (var pixel of redimg.values()) {
    pixel.setRed(255);
  }
  redimg.drawTo(imgcanvas); 
  }
}

function green() {
  if (imageisloaded(img)) {
  for (var pixel of greenimg.values()) {
    pixel.setGreen(255);
  }
  greenimg.drawTo(imgcanvas); 
  }
}

function yellow() {
  if (imageisloaded(img)) {
  for (var pixel of yellowimg.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
  }
  yellowimg.drawTo(imgcanvas);
  }
}

function reset() {
  if (imageisloaded(orimage)){
    orimage.drawTo(imgcanvas);
    grayimg = orimage;
    redimg = orimage;
    blueimg = orimage;
    greenimg = orimage;
    yellowimg = orimage;
  }
    
}
