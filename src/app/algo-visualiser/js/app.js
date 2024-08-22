var method = 0;
var s1 = 0;
var s2 = 0;
interval = null;
//var cellsize = 14;
var quantity = 100;

async function chooseMethod(method) {console.log("hey"+method)
  //console.log("method in chooseMethod: "+method+document.getElementById("cellsizeRange").value);
 // if(document.getElementById("cellsizeRange")!== null)
   // cellsize = document.getElementById("cellsizeRange").value
 htmlElements = "";
 htmlElements += 'delay:<output id="delaySliderVal"> 10 ms &nbsp &nbsp</output>'
 htmlElements += 'quantity:<output id="quantitySliderVal"> 50 &nbsp</output>'
 htmlElements += 'swaps:<output id="swapVal"> 0 &nbsp &nbsp &nbsp </output>'
 if(method===0)
     htmlElements += '&nbsp &nbsp Bubble Sort'
 if(method===1)
     htmlElements += '&nbsp &nbsp Quick Sort'
 if(method===2)
     htmlElements += '&nbsp &nbsp Merge Sort'
 //var display = document.getElementById("display");
//display.innerHTML = htmlElements;
 delaySliderChange(document.getElementById("delayRange").value)
  clearInterval(interval);
  //method = m;
  if (method < 3) sortSetup(method);
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
  if (method > 2 && method < 5) {console.log("hey2"+method)
    //sortSetup(method);

    if (method === 3) dijkstraReset();
    if (method === 4) astarReset();

    searchSetup(method);
  }
}
chooseMethod(0)
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




