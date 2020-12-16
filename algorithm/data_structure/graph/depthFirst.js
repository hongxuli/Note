// stack 

// function DFS (node){
//     let stack = node.children
//     let currentNode = stack.pop()
//     if(currentNode.hasChildren){
//         DFS(currentNode)
//     }else{
//         return currentNode
//     }
// }


function DFS (node,nodeList){
    if(node){
        nodeList.push(node)
        let children = node.children 
        for(let i=0; i< children.length; i++){
            DFS(children[i],nodeList)
        }
    }
    return nodeList 
}