function dolime() {
  var div1 = document.getElementById("d1");
  var cnt= div1.getContext("2d");
  cnt.clearRect(0,0,div1.width,div1.height);
  div1.style.backgroundColor="lime";
}
function docolor() {
  var div1 = document.getElementById("d1");
  var coinput = document.getElementById("clr");
  var color = coinput.value;
  div1.style.backgroundColor = color;
}
function dosquare() {
  var div1 = document.getElementById("d1");
  var szinput = document.getElementById("sldr");
  var size = szinput.value;
  var cnt = div1.getContext("2d");
  cnt.clearRect(0,0,div1.width,div1.height);
  cnt.fillStyle ="red";
  cnt.fillRect(10,10,size,size);
}
