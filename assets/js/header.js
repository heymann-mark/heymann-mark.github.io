function delaySliderChange(val) {
  document.getElementById("delayRange").innerHTML = val + "&nbsp";
  speed = val;
  console.log("delayRange: " + val);
  if (isRunning) {
    if (window.location.toString().includes("bubblesort")) {
      clearInterval(interval);
      interval = setInterval("bubbleSort()", 100 - val);
    }
  }
}
function quantitySliderChange(val) {

  quantity = val;
  arraylength = val;
  unsortedArray.length = val;
  reset();
}

async function start() {
  document.getElementById("startbutton").disabled = true;
  speed = 1000 - document.getElementById("delayRange").value * 10; //this line works
  console.log("speed in the start() function: " + speed);
  if (!isRunning) {
    document.getElementById("quantityRange").disabled = true;
    if (window.location.toString().includes("bubblesort")) {
      isRunning = true;
      resetOn = 0;
      interval = setInterval("bubbleSort()", speed);
    }
    if (window.location.toString().includes("quicksort")) {
      isRunning = true;
      resetOn = 0;
      await quickSort(0, arraylength - 1);
      isRunning = false;
      await finishedquickDraw();
    }
    if (window.location.toString().includes("mergesort")) {
      isRunning = true;
      resetOn = 0;
      await mergeSort(l, arraylength - 1);
      isRunning = false;
      await finishedmergeDraw();
    }
  } else {
    if (method === 0) clearInterval(interval); //this does the pausing for bubble sort
    if (method === 1) {
      speed = 1000;
    }
  }
}

function reset() {
  if (window.location.toString().includes("bubblesort")) {
    resetbubble();
  } else if (window.location.toString().includes("quicksort")) {
    resetquick();
  } else if (window.location.toString().includes("mergesort")) {
    resetmerge();
  } else if (window.location.toString().includes("dijkstra")) {
    dijkstraReset();
  } else if (window.location.toString().includes("astar")) {
    astarReset();
  }
  if (document.getElementById("quantityRange") != null)
    document.getElementById("quantityRange").disabled = false;
  if (document.getElementById("startbutton") != null)
    document.getElementById("startbutton").disabled = false;
}
var randomized = 0;
function randomize() {
  if (randomized == 0) {
    unvisited.forEach((element) => {
      var random = Math.floor(Math.random() * 5);
      if (random % 5 === 0) {
        visited.set(element, 1);
        boxes[element].style.backgroundColor = "black";
      }
    });
    randomized = 1;
  }
}
