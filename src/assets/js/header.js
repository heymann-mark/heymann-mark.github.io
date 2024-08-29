function delaySliderChange(val) {
  document.getElementById("delayRange").innerHTML = val + "&nbsp";
  speed = val;
  if (isRunning) {
    if (method === 0) {
      clearInterval(interval);
      interval = setInterval("bubbleSort()", 1000 - val * 10);
    }
  }
}
function quantitySliderChange(val) {
  quantity = val;
  reset();
}

async function start() {
  document.getElementById("startbutton").disabled = true;
  speed = 1010 - document.getElementById("delayRange").value * 10; //this line works
  if (!isRunning) {
    document.getElementById("quantityRange").disabled = true;
    if (method === 0) {
      isRunning = true;
      resetOn = 0;
      interval = setInterval("bubbleSort()", speed);
    }
    if (method === 1) {
      isRunning = true;
      resetOn = 0;
      await quickSort(0, arraylength - 1);
      isRunning = false;
      await finishedquickDraw();
    }
    if (method === 2) {
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
  if (method == 0) resetbubble();
  if (method == 1) resetquick();
  if (method == 2) resetmerge();
  document.getElementById("quantityRange").disabled = false;
}
