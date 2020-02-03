window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var fgimage;
var bgimage;
function loadfgimage(){
  var discanvas = document.getElementById("c1");
  var fileinput = document.getElementById("fgfile");
  fgimage = new SimpleImage(fileinput);
  fgimage.drawTo(discanvas);
}
function loadbgimage(){
  var discanvas = document.getElementById("c2");
  var fileinput = document.getElementById("bgfile");
  bgimage = new SimpleImage(fileinput);
  bgimage.drawTo(discanvas);
}
function clrcanvas() {
  var cc1 = document.getElementById("c1");
  var cc2 = document.getElementById("c2");
  var cntxt1 = cc1.getContext("2d");
  var cntxt2 = cc2.getContext("2d");
  cntxt1.clearRect(0,0,cc1.width,cc1.height);
  cntxt2.clearRect(0,0,cc2.width,cc2.height);
}
function greenscreen() {
  var discanvas = document.getElementById("c1");
  if (fgimage == null || ! fgimage.complete()) {
    alert("Foreground image is not loaded.")
    return;
  }
  if (bgimage == null || ! bgimage.complete()) {
    alert("Background image is not loaded.")
    return;
  } 
  var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
 for (var pixel of fgimage.values()) {
   var x = pixel.getX();
   var y = pixel.getY();
   if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
     var bgpixel =bgimage.getPixel(x,y);
     output.setPixel(x,y,bgpixel);
   }
   else {
     output.setPixel(x,y,pixel);
   }
 } 
 clrcanvas();
 output.drawTo(discanvas); 
}
