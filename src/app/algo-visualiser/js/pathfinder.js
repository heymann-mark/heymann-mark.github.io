var unvisited = [];
//var squarewidth
//calling searchSetup with sm(search Method) = 3 and cs(cell size) = 14
console.log("method in pathfinder: " + method);
function searchSetup(searchmethod) {
  console.log("method in pathfinder: " + searchmethod);
  htmlElements = "";
  htmlElements =
    '<div class="cellsize-slider-container" id="cellsize-slider-container">' +
    '<label for="cellsizeRange" class="form-label">Cellsize: </label>' +
    "<input " +
    'type="range"' +
    'min="8"' +
    'max="30"' +
    'value="14"' +
    'class="slider"' +
    'id="cellsizeRange"' +
    'step="1"' +
    'oninput="quantity = this.value"' +
    '[(ngModel)]="cellsize"' +
    'oninput="cellsizeSliderChange(this.value)"' +
    "/>" +
    '<output class="cellsize-slider-output">{{ cellsize }}</output>' +
    "</div>";
   // document.getElementById("container");
  console.log("searchsetup");
  container = document.getElementById("search-container");
  //container.style.display = "block";
  //container.style.overflow = "hidden";
  //document.getElementById("quantitySliderContainer").style.visibility =
    //"hidden";
  //document.getElementById("cellsize").style.visibility = "visible";
  //document.getElementById("searchdisplay").style.visibility = "visible";
  //document.getElementById("searchdisplay").style.paddingTop = "100px";
  //document.getElementById("searchdisplay").style.paddingTop
 // randomizebutton.style.visibility = "visible";
 // customizebutton.style.visibility = "visible";
  isStartChosen = 0;
  isStopChosen = 0;
  clearInterval(interval);
  cellsize = document.getElementById("cellsizeRange").value;
  boxsize = cellsize - 2;

  // window height
  const height = window.innerHeight;

  // window width
  const width = window.innerWidth;

  //console.log("height and width: "+height, width); // 711 1440
  go();
  window.addEventListener("resize", go);
  function go() {
    //console.log("resize event...");
    //console.log("window.innerHeight..."+window.innerHeight);
    // console.log("window.innerWidth..."+window.innerWidth);
    // console.log("document.documentElement.clientWidth..."+document.documentElement.clientWidth);
    // console.log("document.documentElement.clientHeight..."+document.documentElement.clientHeight);
    //document.querySelector('.width').innerText = document.documentElement.clientWidth;
    //document.querySelector('.height').innerText = document.documentElement.clientHeight;
  }
  console.log("cellsize::::::::::::::::::" + cellsize);
  columns = Math.floor(width / cellsize);
  rows = Math.floor(height / cellsize - 1);
  max = columns * rows;
  customizing = 0;
  visited = new Map();
  unvisited.length = columns * rows;
  htmlElements = "";
  if (searchmethod === 3)
    htmlElements +=
      '<div id="searchdisplay" style = "background-color:black;color:white;display:flex">djikstra\'s algorithm';
  if (searchmethod === 4)
    htmlElements +=
      '<div id="searchdisplay" style = "background-color:red;color:white;">&nbsp &nbsp A* Algorithm &nbsp &nbsp';

  htmlElements += "<output id=instructions></output>";

  htmlElements += "</div>"; //close searchdisplay

  htmlElements +=
    '<div id = "grid" ' +
    'style = "' +
    "overflow-x:hidden" +
    "width:100%;" +
    "display:flex;" +
    'flex-wrap: wrap;">';

  for (var i = 0; i < unvisited.length; i++) {
    htmlElements +=
      '<div class="square" ' +
      'style="' +
      "background-color: black;" +
      "width:" +
      cellsize +
      "px ;" +
      "height: " +
      cellsize +
      "px;" +
      "display:flex" +
      '"' +
      " >" +
      '<div class="box" ' +
      'style="width:' +
      boxsize +
      "px ;" +
      "height: " +
      boxsize +
      "px;" +
      "background-color:white;" +
      '" ' +
      "onclick=\"draw('" +
      i +
      "');\">" +
      "</div>" +
      "</div>";
  }
  htmlElements += "</div>"; //closing grid
  //var container = document.getElementById("container");
  container.innerHTML = htmlElements;
  //delaySliderChange(document.getElementById("delayRange").value);
  //var squares = Array.from(document.querySelectorAll('.square'));
  boxes = Array.from(document.querySelectorAll(".box"));
  var unvisitedlength = unvisited.length;
  for (i = 0; i < unvisitedlength; i++) {
    unvisited[i] = i;
  }
  for (i = 0; i < unvisitedlength; i++) {
    visited.set(i, 0); //0 is for false
  }
  var i = 0;
  var k = 0;
  draw(-1);
}

function randomize() {
  unvisited.forEach((element) => {
    var random = Math.floor(Math.random() * 5);
    if (random % 5 === 0) {
      visited.set(element, 1);
      boxes[element].style.backgroundColor = "black";
    }
  });
}

function customize() {
  if (customizing === 0) {
    document.getElementById("instructions").innerHTML =
      "Click any cell to add or delete an obstacle, click customize when done.";
    customizing = 1;
    let startX;
    let startY;
    var grid = document.querySelector(".grid");
    function getCursorPosition(grid, event) {
      const rect = grid.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      var p =
        columns * Math.floor(y / squarewidth) + Math.floor(x / squarewidth);
      if (customizing === 1 && y > 0 && x > 0 && x < 1485 && y < 684) {
        boxes[p].style.backgroundColor = "black";
        visited.set(p, 1);
      }
    }
    var mousePosition, holding;
    function myInterval() {
      var setIntervalId = setInterval(function () {
        if (!holding) {
          clearInterval(setIntervalId);
        } else {
          getCursorPosition(grid, mousePosition);
        }
      }, 10); //set your wait time between consoles in milliseconds here
    }

    grid.addEventListener("mousedown", function () {
      holding = true;
      myInterval();
    });
    grid.addEventListener("mouseup", function () {
      holding = false;
      myInterval();
    });
    grid.addEventListener("mouseleave", function () {
      holding = false;
      myInterval();
    });
    grid.addEventListener("mousemove", function (e) {
      if (holding === true) mousePosition = e;
      myInterval();
    });
  } else if (customizing === 1) {
    document.getElementById("instructions").innerHTML =
      "&nbsp Click Square to choose start";
    customizing = 0;
  }
}

function draw(i) {
  console.log("drawing....................................." + method);
  if (i === -1) {
    console.log("i === -1");
    document.getElementById("instructions").innerHTML =
      "&nbsp Click Square to choose start";
  } else {
    if (customizing === 0) {
      if (isStartChosen === 0) {
        isStartChosen = 1;
        boxes[i].style.backgroundColor = "green";
        beginning = i;
        if (isStopChosen === 0)
          document.getElementById("instructions").innerHTML =
            "Click Square to choose end";
      } else if (isStopChosen === 0) {
        console.log("isStopChosen" + method);
        isStopChosen = 1;
        boxes[i].style.backgroundColor = "red";
        stop = i;
        document.getElementById("instructions").innerHTML = " ";
        if (method === 3) djikstra(beginning, stop);
        if (method === 4) astar(beginning, stop);
      }
    } else {
      visited.set(i, 1);
      boxes[i].style.backgroundColor = "black";
    }
  }
}
