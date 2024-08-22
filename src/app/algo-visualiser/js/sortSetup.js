//get the arraylength from the range slider on the page
var unsortedArray = [];
var arraylength=0;
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
  /*
  htmlElements = "";
  htmlElements +=
  '<div class="delay-slider-container" id="delay-slider-container"style="float: left">'+
            '<label for="delayRange" class="form-label">Speed: </label>'+
            '<input '+
              'type="range"'+
              'min="500"'+
              'max="1000"'+
              'value="10"'+
              'class="slider"'+
              'id="delayRange"'+
              'step="1"'+
              'oninput="delaySliderChange(this.value)"'+
             '[(ngModel)]="speed"'+
           '/>'+
           '<output class="slider-output">{{ speed }}</output>'+
         '</div>'+

         '<div class="quantity-slider-container" id="quantity-slider-container">'+
           '<label for="quantityRange" class="form-label">Quantity: </label>'+
            '<input '+
              'type="range"'+
              'min="100"'+
              'max="1000"'+
              'value="100"'+
              'class="slider"'+
              'id="quantityRange"'+
              'step="1"'+
              'oninput="quantity = this.value"'+
              '[(ngModel)]="quantity"'+
              'oninput="quantitySliderChange(this.value)"'+
            '/>'+
            '<output class="quantity-slider-output">{{ quantity }}</output>'+
          '</div>';
         // document.getElementById("slider-container").innerHTML = htmlElements;
          var arraylength = document.getElementById("quantityRange").value;
  container = document.getElementById("sort-container");
  container.style.display = "flex";
  randomizebutton = document.getElementById("randomizebutton");
  randomizebutton.style.visibility = "hidden";
  customizebutton = document.getElementById("customizebutton");
  customizebutton.style.visibility = "hidden";
  document.getElementById("cellsizeSliderContainer").style.visibility = "hidden";
  //document.getElementById("cellsizeSliderContainer").style.display = "none";
  document.getElementById("quantitySliderContainer").style.visibility = "visible";
  */
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
  unsortedArray.length = arraylength;
}
