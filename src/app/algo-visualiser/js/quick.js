function resetquick() {
  document.getElementById("startbutton").disabled = false;
  //clearInterval(interval);
  if (isRunning) resetOn = 1;
  isRunning = false;
  s1 = 0;
  s2 = 0;
  swaps = -1;
}

async function quickSort(begin, end) {
  //console.log("quickSort, begin   " + begin + ", end   " + end);
 
  if (resetOn === 1) {
    return;
  }
  if (begin < end) {
    await partition(begin, end);
    await quickSort(begin, partitionIndex - 1);
    await quickSort(partitionIndex + 1, end);
  }
}

async function partition(p1, p2) {
  console.log("partition: " + speed);
  var pivot = unsortedArray[p2];
  var i = p1 - 1;
  switched = 0;
  for (j = p1; j < p2; j++) {
    if (resetOn === 1) return;
    if (unsortedArray[j] <= pivot) {
     // speed = 1010 - document.getElementById("delayRange").value;
      console.log("partition2: " + speed);
      await sleep(speed);
      i++;
      switched = 1;
      await quickdraw(); //pre swap colored bars
      if (i != j) await swap(unsortedArray, i, j);
      await quickdraw(); //post swap colored bars
      await quickdraw(); //post post swap white bars
    }
  }
  var swapTemp = unsortedArray[i + 1];
  unsortedArray[i + 1] = unsortedArray[p2];
  unsortedArray[p2] = swapTemp;
  partitionIndex = i + 1;
}

async function swap(arr, a, b) {
  s1 = b;
  s2 = a;
  var swapTemp = arr[a];
  arr[a] = arr[b];
  arr[b] = swapTemp;
  swaps++;
  document.getElementById("swapVal").innerHTML = swaps;
}

async function quickdraw() {
  //console.log("quickdraw  " + speed);
  if (resetOn === 1 && isRunning) return;
  var j = 1;
  dividers.forEach((index) => {
    dividers[j - 1].style.backgroundColor = "black";
    dividers[j - 1].style.width = 100 / (1 + (T + 1) * arraylength) + "%";
    j++;
  });
  var i = 1;
  unsortedArray.forEach((index) => {
    squares[i - 1].style.backgroundColor = "#F1F3F4";
    if (resetOn === 0) {
      squares[s1].style.backgroundColor = "green"; //swap values
      squares[s2].style.backgroundColor = "green"; //swap values
    }
    squares[partitionIndex].style.backgroundColor = "yellow"; //pivot
    squares[i - 1].style.height = 0.9 * (index + 10) + 1 + "%";
    squares[i - 1].style.width = (T * 100) / (1 + (T + 1) * arraylength) + "%";
    i++;
  });
}
async function pauseQuick(){
  while(paused){
    
  }
}
async function finishedquickDraw() {
  document.getElementById("startbutton").disabled = true;
  var index = 0;
  while (index < unsortedArray.length) {
    if (resetOn === 0 && !isRunning)
      squares[index].style.backgroundColor = "#41FF00";
    index++;
    console.log("finishedquickDraw"+speed);
    await sleep(10);
  }
}
