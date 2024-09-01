//get the arraylength from the range slider on the page
var unsortedArray = [];
var arraylength = 100;
//if (document.getElementById("quantityRange") != null) {
 //  arraylength = document.getElementById("quantityRange").value;
 // console.log(
 //   "inside the sort setup qunatity range arraylength: " + arraylength
 // );
//}

var end = arraylength - 1;
var partitionIndex = arraylength - 1;
//set speed
var speed = 0;
var sorted = 0;
//set is running
var begin = 0;
var squares;
var dividers;
var resetOn = 0;
var isRunning = false;
var numberOfSCreens = 1;
function sortSetup() {
  if (document.getElementById("quantityRange") != null)
    console.log(
      "inside the sort setup file array length: " +
        document.getElementById("quantityRange").value
    );
  htmlElements = "";
  htmlElements +=
    '<div id = "display" ' +
    'style = "' +
    "position:absolute;" +
    "z-index:1;" +
    "width:380px;" +
    "height:30px;" +
    "float:right;" +
    "background-color:black;" +
    "color:white;" +
    "overflow-x:hidden;" +
    "overflow-y:hidden;" +
    '">';
  htmlElements += '<label id="sort-label" class="form-label"> </label>';
  htmlElements +=
    'array access:<output id="arrayAccessVal" class = "output"> 0  </output> &nbsp &nbsp';
  htmlElements +=
    'swaps:<output id="swapVal" class = "output"  [(ngModel)]="swaps"> 0 </output> &nbsp &nbsp';
  htmlElements += "</div>";

  if (document.getElementById("quantityRange") != null)
    arraylength = document.getElementById("quantityRange").value;

  end = arraylength - 1;
  partitionIndex = arraylength - 1;
  if (document.getElementById("quantityRange") != null)
    console.log(
      "inside the sort setup method array length: " +
        document.getElementById("quantityRange").value
    );

  htmlElements += '<div class="bline"> </div>';
  for (var i = 0; i < arraylength; i++) {
    htmlElements += '<div class="line"> </div>';
    htmlElements += '<div class="bline"> </div>';
  }
  if (document.getElementById("bubblesort-container") != null)
    document.getElementById("bubblesort-container").innerHTML = htmlElements;
  if (document.getElementById("quicksort-container") != null)
    document.getElementById("quicksort-container").innerHTML = htmlElements;
  if (document.getElementById("mergesort-container") != null)
    document.getElementById("mergesort-container").innerHTML = htmlElements;
  squares = Array.from(document.querySelectorAll(".line"));
  dividers = Array.from(document.querySelectorAll(".bline"));
  console.log("squares1: " + squares.length);
  console.log("arraylength: " + arraylength);
  var n;
  for (n = 0; n < arraylength; n++) {
    unsortedArray[n] = Math.floor(Math.random() * 100);
  }
  console.log("unsortedArray: " + unsortedArray);
}
