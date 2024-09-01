function delaySliderChange(val) {
  document.getElementById("delayRange").innerHTML = val + "&nbsp";
  speed = val;
  if (isRunning) {
    if (window.location.toString().includes("bubblesort")) {
      clearInterval(interval);
      interval = setInterval("bubbleSort()", 1000 - val * 10);
    }
  }
}
function quantitySliderChange(val) {
  console.log("qunatity slider: "+ val)
  quantity = val;
  arraylength = val;
  unsortedArray.length = val;
  reset();
}

async function start() {
  document.getElementById("startbutton").disabled = true;
  speed = 1010 - document.getElementById("delayRange").value * 10; //this line works
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
  }
  if (window.location.toString().includes("quicksort")) {
    resetquick();
  }
  if (window.location.toString().includes("mergesort")) {
    resetmerge();
  }
  if (document.getElementById("quantityRange") != null)
    document.getElementById("quantityRange").disabled = false;
  if (document.getElementById("startbutton") != null)
    document.getElementById("startbutton").disabled = false;
}
