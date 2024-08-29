var unvisited = [];
cellsize = 16;
function searchSetup() {
  isStartChosen = 0;
  isStopChosen = 0;
  clearInterval(interval);
  boxsize = cellsize - 2;
  const height = window.innerHeight;
  const width = window.innerWidth;
  columns = Math.floor(width / cellsize);
  rows = Math.floor((height - 80) / cellsize);
  max = columns * rows;
  customizing = 0;
  visited = new Map();
  unvisited.length = columns * rows;
  htmlElements = "";
  htmlElements +=
    '<div id="searchdisplay" ' +
    "style = " +
    '"background-color:red;' +
    "color:white;" +
    "display:flex;" +
    "margin-top:55px;" +
    '">';
  htmlElements +=
    '<label id="search-label" class="form-label" style = "background-color:red; "> </label>';

  htmlElements += "<output id=instructions></output>";
  htmlElements += "</div>"; //close searchdisplay

  htmlElements +=
    '<div id = "grid" ' +
    'style = "' +
    "overflow-x:hidden" +
    "width:100%;" +
    "padding-top:0px;" +
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
  if (document.getElementById("search-container") != null) {
    console.log("container is not null");
    container = document.getElementById("search-container");
    container.innerHTML = htmlElements;
  }

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
  if (i === -1) {
    if (document.getElementById("instructions") != null)
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
