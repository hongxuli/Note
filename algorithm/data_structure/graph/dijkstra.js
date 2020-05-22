/*
Find the “cheapest” node.
Update the costs of the immediate neighbors of this node.
Repeat steps 1 and 2 until you’ve done this for every node.
Return the lowest cost to reach the node, and the optimal path to do so.
*/
/* */

/* 
const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish:{}
};


const costs = {
  A: 5,
  B: 2,
  finish: Infinity,
};


But we don’t just want to know how much it costs to reach the finish node.
We want to know the path we need to take to get there! 
This requires the use of another data structure to keep track of the parent node each node.
When a node has many possible parents, we’ll only keep the parent node that leads to the cheapest cost.

const parents = {
  A: "start",
  B: "start",
  finish: null,
};


const processed = ['start', 'A', 'B'];


console.log(costs)


returns something like
  {
    A: 5,
    B: 2,
    D: 9
    finish: Infinity
  };
*/

// First we’ll define a function that given the costs and the processed nodes,
//  will return the cheapest node that hasn’t been processed.


const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish:{}
};

const lowestCostNode = (costs,processed) =>{
    return Object.keys(costs).reduce((lowest,node)=>{
        if(lowest === null || costs[node] < costs[lowest]){
            if(!processed.includes(node)){
                lowest = node
            }
        }
        return lowest
    }, null)
}

const dijkstra = (graph) =>{
     const costs = Object.assign({finish:Infinity},graph.start)
     const parents = {finish: null}


      for (let child in graph.start) {
        // add children of start node
        parents[child] = "start";
      }

     let processed = []



     let node = lowestCostNode(costs, processed)
     while(node){
         let cost = costs[node]
        //  children is object, so use for in to traversal it 
         let children = graph[node]
         for( let n in children){
             let newCost  =  cost + children[n]

             if(!costs[n]){
                costs[n] = newCost
                parents[n] = node
             }
             if(costs[n] > newCost){
                costs[n] = newCost
                parents[n] = node;
             }
         }

        processed.push(node)

        node = lowestCostNode(costs,processed)
     }


    let optimisedPath = ['finish']
    let parent = parents['finish']
    while(parent){
        optimisedPath.push(parent)
        parent = parents[parent]
    }

    const result = optimisedPath.reverse()
    const lowestCost =  costs['finish']
    return {result, lowestCost}
}


console.log(dijkstra(graph));
