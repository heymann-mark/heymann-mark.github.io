//get the arraylength from the range slider on the page
var unsortedArray = [];
var arraylength = 0;
if (document.getElementById("quantityRange") != null)
  arraylength = document.getElementById("quantityRange").value;
var end = arraylength - 1;
var partitionIndex = arraylength - 1;
//set speed
var speed = 500;
var sorted = 0;
//set is running
//var htmlElements = "";
var begin = 0;
var squares;
var dividers;
var resetOn = 0;
var isRunning = false;
var numberOfSCreens = 1;
function sortSetup(method) {
  console.log("You are inside of sort setup"+method);

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
  if (method === 0) htmlElements += "Bubble Sort &nbsp &nbsp";
  if (method === 1) htmlElements += "Quick Sort &nbsp &nbsp";
  if (method === 2) htmlElements += "Merge Sort &nbsp &nbsp";

  htmlElements +=
    'array access:<output id="arrayAccessVal" class = "output"> 0  </output> &nbsp &nbsp';
  htmlElements +=
    'swaps:<output id="swapVal" class = "output"  [(ngModel)]="swaps"> 0 </output> &nbsp &nbsp';

  htmlElements += "</div>";
  if (document.getElementById("quantityRange") != null)
    arraylength = document.getElementById("quantityRange").value;

  end = arraylength - 1;
  partitionIndex = arraylength - 1;

  htmlElements += '<div class="bline"> </div>';
  for (var i = 0; i < arraylength; i++) {
    htmlElements += '<div class="line"> </div>';
    htmlElements += '<div class="bline"> </div>';
  }
  if (document.getElementById("sort-container") != null)
    document.getElementById("sort-container").innerHTML = htmlElements;
  squares = Array.from(document.querySelectorAll(".line"));
  dividers = Array.from(document.querySelectorAll(".bline"));

  var n;
  for (n = 0; n < arraylength; n++) {
    unsortedArray[n] = Math.floor(Math.random() * 100);
  }
  if (method == 0) {
    unsortedArray.length = arraylength;
    var i = 1;
    unsortedArray.forEach((index) => {
      squares[i - 1].style.backgroundColor = "#F1F3F4";
      squares[current].style.backgroundColor = "red";
      squares[i - 1].style.height = index + 3 + "%";
      squares[i - 1].style.width =
        (T * 100) / (1 + (T + 1) * arraylength) + "%";
      i++;
    });

    var j = 1;
    dividers.forEach((index) => {
      dividers[j - 1].style.backgroundColor = "#000000";
      dividers[j - 1].style.width = 100 / (1 + (T + 1) * arraylength) + "%";
      j++;
    });
  }
}
