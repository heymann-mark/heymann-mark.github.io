var method=0;
var s1 = 0;
var s2 = 0;
interval = null;
//var cellsize = 14;
var quantity = 100;

async function chooseMethod(m) {
  method = m;
  document.getElementById("startbutton").innerHTML = "Start";
  clearInterval(interval);
  if (method < 3) {

    //location.href = './sort';//for when you are coming from the search header
  }
  /*
  if (method === 0) {
    resetbubble();
  }
  if (method === 1) {
    resetquick();
  }
  if (method === 2) {
    resetmerge();
  }
    */
  if (method > 2 && method < 5) {

     location.href = './search';
    //if (method === 3) dijkstraReset();
    //if (method === 4) astarReset();

  }
}
sortSetup();
bubbledraw();
searchSetup();
dijkstraReset()
//searchSetup();//whats's this do?
async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}





