var pq = new PriorityQueue();
var previousVertex
var weightmaps
var dist
var weight
async function djikstra(src,dest){
   src = parseFloat(src)
   dest = parseFloat(dest)
   previousVertex= new Map();
   dist = new Map();
   weightmaps= new Map();
   var unvisitedlength = unvisited.length
   for(i = 0; i < unvisitedlength; i++) {
     dist.set(unvisited[i], max);
   }
   for(i=0;i<unvisitedlength;i++){
   var w = new Map();
   var distanceMax = 1
   w.set(i+1, Math.floor(Math.random()*distanceMax))
   w.set(i+columns-1, Math.floor(Math.random()*distanceMax))
   w.set(i+columns, Math.floor(Math.random()*distanceMax))
   w.set(i+columns+1, Math.floor(Math.random()*distanceMax))
   weightmaps.set(i,w);
 }
  speed = 1010-document.getElementById("delayRange").value
  djikstrasAlgorithm(src,dest).then();
}

async function djikstrasAlgorithm(src,dest){
  dist.set(src, 0)
  pq.enqueue(src,1);
  while(!pq.isEmpty()){
    var u = parseFloat(pq.dequeue().element)
    while(visited.get(u)===1){
      u = pq.dequeue().element
    }
    visited.set(u,1);
    if(parseFloat(u)!==parseFloat(src)&&parseFloat(u)!==parseFloat(dest))
      boxes[u].style.backgroundColor = 'blue'
    await sleep(speed);
    v = u + columns
    if(v < columns*rows){//down
      weight = weightmaps.get(u).get(u+columns)
      if(parseFloat(dist.get(u)) + parseFloat(weight) < parseFloat(dist.get(v))){
        dist.set(v, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u - 1
    if(v > columns*Math.floor(u/columns)-1){//left
        weight = weightmaps.get(v).get(v + 1)
      if(dist.get(u) + weight < dist.get(v )){
        dist.set(u - 1, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
   v = u - columns
  if(v > 0){//up
      weight = weightmaps.get(v).get(v+columns)
    if(dist.get(u) + weight < dist.get(v)){
      dist.set(v, dist.get(u) + weight)
      previousVertex.set(v,u)
      pq.enqueue(v,dist.get(u) + weight);
    }
  }
  v = u + 1
  if(v < columns*Math.floor(u/columns + 1)){//right
      weight = weightmaps.get(u).get(u+1)
    if(dist.get(u) + weight < dist.get(v)){
      dist.set(v, dist.get(u) + weight)
      previousVertex.set(v,u)
      pq.enqueue(v,dist.get(u) + weight);
    }
  }
    v = u - columns - 1
    if(v > columns*Math.floor(u/columns - 1) && v > 0){//upleft
      weight = weightmaps.get(v).get(v + columns + 1)
      if(dist.get(u) + weight < dist.get(v)){
        dist.set(v, dist.get(u) + 1)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u - columns + 1
    if(v < columns*Math.floor(u/columns) && v > 0){//upright
      weight = weightmaps.get(v).get(v + columns - 1)
      if(dist.get(u) + weight < dist.get(v)){
        dist.set(v, dist.get(u) + 1)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u + columns + 1
    if(v < columns*(Math.floor(u/columns + 2))){//rightdown
      weight = weightmaps.get(u).get(u + columns + 1)
      if(dist.get(u) + weight < dist.get(v)){
        dist.set(v, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }
    v = u + columns - 1
    if(v > columns*Math.floor(u/columns + 1)){//downleft
      weight = weightmaps.get(u).get(u + columns - 1)
      if(dist.get(u) + weight < dist.get(v)){
        dist.set(v, dist.get(u) + weight)
        previousVertex.set(v,u)
        pq.enqueue(v,dist.get(u) + weight);
      }
    }

    if(u===dest||resetOn===1){
      var p = previousVertex.get(u)
      while(!pq.isEmpty()){
        pq.dequeue(previousVertex.get(p));
      }

    }
  }

  path = []
    if(resetOn===0){
  path.push(dest)
  boxes[dest].style.backgroundColor = '#41FF00'
  await sleep(speed);
  var c = previousVertex.get(dest)
  boxes[c].style.backgroundColor = '#41FF00'
  path.push(c)
  await sleep(speed);
  while(previousVertex.get(c)!=null){
    c = previousVertex.get(c);
    path.push(c);
    boxes[c].style.backgroundColor = '#41FF00'
    await sleep(speed);
 }
}resetOn=0
  return path;
}
function dijkstraReset(){
  resetOn=0
if(!pq.isEmpty())
  resetOn = 1
}
