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
sortSetup();
bubbledraw();

async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}





