
var paused = false;
function delaySliderChange(val) {
  console.log("speed: "+val);
  document.getElementById("delayRange").innerHTML = val + "&nbsp";
  speed = val;
  if(isRunning && !paused){
    if (method === 0){
      clearInterval(interval);
      interval = setInterval("bubbleSort()", 1000 - val*10);
    }
  }
}
function quantitySliderChange(val) {
  console.log("quantitySliderChange: quantity:" + quantity);
  quantity = val;
 reset();
}



async function start() {console.log("make it start again"+method)
  document.getElementById("startbutton").innerHTML = "Pause";
  speed = 1010 - document.getElementById("delayRange").value*10;//this line works
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

          //await quickSort(0, arraylength - 1);
          speed = 1010 - document.getElementById("delayRange").value;

        }
      //if (method === 2) interval = setInterval("bubbleSort()", speed);
      paused = false;
    } else {//pause
      if (method === 0)
         clearInterval(interval);//this does the pausing for bubble sort
      if (method === 1){

         speed  = 1000;
      }
     // document.getElementById("startbutton").innerHTML = "Start";
      paused = true;
    }
  }
}



