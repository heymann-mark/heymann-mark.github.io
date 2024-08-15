var method = 0;
var s1 = 0;
var s2 = 0;
interval = null;
var cellsize = 14;
var quantity = 100;
console.log("running")
async function chooseMethod(m) {
  if (document.getElementById("cellsize") !== null)
    cellsize = document.getElementById("cellsize").value;

  document.getElementById("startbutton").innerHTML = "Start";
  htmlElements = "";
  if (m === 0) htmlElements += "Bubble Sort &nbsp &nbsp";
  if (m === 1) htmlElements += "Quick Sort &nbsp &nbsp";
  if (m === 2) htmlElements += "Merge Sort &nbsp &nbsp";

  htmlElements += 'quantity:<output id="quantitySliderVal" class = "output">' + quantity + " </output>&nbsp &nbsp";

  htmlElements += 'array access:<output id="arrayAccessVal" class = "output"> 0  </output> &nbsp &nbsp';
  htmlElements += 'swaps:<output id="swapVal" class = "output"> 0 </output> &nbsp &nbsp';
  htmlElements += 'speed:<output id="speedSliderVal" class = "output">' + speed + " </output> &nbsp &nbsp";

  //htmlElements += speed;
  var display = document.getElementById("display");
  display.innerHTML = htmlElements;

  clearInterval(interval);
  method = m;
  if (method < 3) sortSetup();
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
    if (method === 3) dijkstraReset();
    if (method === 4) astarReset();
    searchSetup(m, cellsize);
  }
}
chooseMethod(0);
//async function sleep(ms) {
  //return new Promise((resolve) => setTimeout(resolve, ms));
//}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
  await sleep(100000)
  console.log("First")
  await sleep(100000)
  console.log("Second")
  await sleep(100000)
  console.log("Third")
}

//repeatedGreetings()
