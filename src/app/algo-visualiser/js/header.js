var paused = false;
function delaySliderChange(val) {
  document.getElementById("speedSliderVal").innerHTML = val + "&nbsp";
  speed = val;
  if(isRunning){
    if (method === 0){
      clearInterval(interval);
      interval = setInterval("bubbleSort()", 1000 - val);
    }
  }
}
function quantitySliderChange(val) {
  console.log("quantitySliderChange............");
  //document.getElementById("quantitySliderVal").innerHTML = val + "&nbsp";
  quantity = val;
  reset();
}

function reset() {
  arrayAccess = 0;
  document.getElementById("quantityRange").disabled = false;
  document.getElementById("startbutton").innerHTML = "Start";
  paused = false;
  chooseMethod(method);
}

async function start() {
  document.getElementById("startbutton").innerHTML = "Pause";
  speed = 1010 - document.getElementById("delayRange").value;
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
  }else{
    //if running and the start button is pressed, we pause
    if (paused) {//unpause
      //take care of label on button
      document.getElementById("startbutton").innerHTML = "Pause";
      if (method === 0)
         interval = setInterval("bubbleSort()", speed);
      if (method === 1) {
        //pauseQuick()
        //await quickSort(0, arraylength - 1);
          //speed = 1010-document.getElementById("delayRange").value
         // console.log("unpause?  " + speed);
          //await quickSort(0, arraylength - 1);
          speed = 1010 - document.getElementById("delayRange").value;
          console.log("unpause?  " + speed);
        }
      //if (method === 2) interval = setInterval("bubbleSort()", speed);
      paused = false;
    } else {//pause
      if (method === 0)
         clearInterval(interval);//this does the pausing for bubble sort
      if (method === 1){
        console.log("pause?");
         speed  = 1000;
      }
      document.getElementById("startbutton").innerHTML = "Start";
      paused = true;
    }
  }
}


