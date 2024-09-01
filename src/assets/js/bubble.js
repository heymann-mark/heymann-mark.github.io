var current = 0;
var swaps = 0;
var switched = 1;
var f = 0;
var arrayAccess = 0;
async function bubbleSort() {
  if (resetOn === 1) return;
  if (sorted === 0) {
    bubbledraw();
    if (unsortedArray[current] > unsortedArray[current + 1]) {
      if (resetOn === 1) return;

      var temp = unsortedArray[current];
      unsortedArray[current] = unsortedArray[current + 1];
      unsortedArray[current + 1] = temp;
      switched = 1;
      swaps++;
      document.getElementById("swapVal").innerHTML = swaps;
    }
    if (current === 0) {
      arrayAccess++;
      document.getElementById("arrayAccessVal").innerHTML = arrayAccess;
    }
    current++;
    if (current === end && switched === 0) {
      current = 0;
      sorted = 1;
    }
    if (current === end && switched === 1) {
      switched = 0;
      end = end - 1;
      current = 0;
    }
  }
  if (sorted === 1) {
    document.getElementById("startbutton").disabled = true;
    isRunning = false;
    if (current === unsortedArray.length) {
      clearInterval(interval);
    } else {
      squares[current].style.backgroundColor = "#41FF00";
      current++;
    }
  }
}

function bubbledraw() {
  console.log("squares2: " + arraylength);
  console.log("squares2: " + squares.length);
  console.log("squares2: " + unsortedArray.length);
  console.log("unsortedArray: " + unsortedArray);

  htmlElements = "Bubble Sort &nbsp &nbsp";
  if (document.getElementById("sort-label") != null)
    document.getElementById("sort-label").innerHTML = htmlElements;
  var i = 1;
  unsortedArray.forEach((index) => {
    squares[i - 1].style.backgroundColor = "#F1F3F4";
    squares[current].style.backgroundColor = "red";
    squares[i - 1].style.height = index + 3 + "%";
    squares[i - 1].style.width = (T * 100) / (1 + (T + 1) * arraylength) + "%";
    i++;
  });

  var j = 1;
  dividers.forEach((index) => {
    dividers[j - 1].style.backgroundColor = "#000000";
    dividers[j - 1].style.width = 100 / (1 + (T + 1) * arraylength) + "%";
    j++;
  });
}
function resetbubble() {
  console.log(
    "inside resetbubble: " +
      document.getElementById("quantityRange").value
  );
  if (document.getElementById("startbutton") != null)
    document.getElementById("startbutton").disabled = false;
  method = 0;
  sorted = 0;
  current = 0;
  end = unsortedArray.length - 1;
  switched = 1;
  resetOn = 1;
  isRunning = false;
  swaps = 0;
  clearInterval(interval);
  sortSetup();
  bubbledraw();
}
