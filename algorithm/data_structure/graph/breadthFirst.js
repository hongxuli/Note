//  queue   


function BFS (node){
    let nodeList = []
    if(node){
        let queue = []
        queue.push(node)

        while (queue.length !=0){
            // 左边出
            let currentNode  = queue.shift()

            // 插入结果
            nodeList.push(currentNode);

            let childrens = currentNode.children
            // 右边入
            childrens.forEach(node => {
                queue.push(node)
            });
        }
    }

    return nodeList
}