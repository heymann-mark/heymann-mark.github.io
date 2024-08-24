var method = 3;
var s1 = 0;
var s2 = 0;
interval = null;
//var cellsize = 14;
var quantity = 100;

async function chooseMethod(method) {
 delaySliderChange(document.getElementById("delayRange").value)
  clearInterval(interval);
  if (method < 3) {
    location.href = './sort';
  }
  if (method === 0) {
    resetbubble();
    bubbledraw();
    document.getElementById("startbutton").disabled = false;
  }
  if (method === 1) {
    resetquick();
    quickdraw();
  }
  if (method === 2) {
    resetmerge();
    mergedraw();
  }
  if (method > 2 && method < 5) {
     location.href = './search';
    if (method === 3) dijkstraReset();
    if (method === 4) astarReset();
    searchSetup(method);
  }
}
sortSetup(0);
searchSetup(3);
/*
async function start(){
  console.log("pushed start button"+method + isRunning);
  speed = 1010-document.getElementById("delayRange").value
 if(isRunning === 0){
   if(method===0){console.log("method is zero:");
     isRunning = 1
     resetOn = 0
     interval = setInterval("bubbleSort()",speed)
  }
   if(method===1){
     isRunning = 1
     resetOn = 0
     await quickSort(0,arraylength-1);
     isRunning = 0
     await finishedquickDraw();
   }
   if(method===2){
     isRunning = 1
     resetOn = 0
     await mergeSort(l,arraylength - 1)
     isRunning = 0
     await finishedmergeDraw()
   }
 }
}
 */
async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
function reset(){
  chooseMethod(method)
}




