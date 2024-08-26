var method=0;
var s1 = 0;
var s2 = 0;
interval = null;
//var cellsize = 14;
var quantity = 100;

async function chooseMethod(m) {
  method = m;
  document.getElementById("startbutton").innerHTML = "Start";

  console.log("first entering choose method with method: "+method);
  clearInterval(interval);
  if (method < 3) {
    //location.href = './sort';
  }
  if (method === 0) {
    resetbubble();
    bubbledraw();
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
//searchSetup(3);

async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
//function reset(){
  //chooseMethod(method)
//}

function reset() {
/*
Here I should
*/



  console.log("method in reset: "+method);
  if(method == 0)resetbubble();
  if(method == 1)resetquick();
  if(method == 2)resetMerge();
  document.getElementById("startbutton").disabled = false;
  document.getElementById("startbutton").innerHTML = "Start";
  document.getElementById("quantityRange").disabled = false;
      /*
  arrayAccess = 0;
  document.getElementById("quantityRange").disabled = false;
  document.getElementById("startbutton").disabled = false;
  //document.getElementById("startbutton").innerHTML = "Start";
  ///document.getElementById("startbutton").disabled = "false";
  paused = false;
  sortSetup(method);
  current = 0;
  resetbubble();
  */
}



