class TreeNode { 
    value : number
    left: undefined | TreeNode
    right: undefined | TreeNode 
    constructor(value: number){
        this.value =  value 
        this.left = undefined
        this.right =undefined
    }

    addLeft(node: TreeNode){
        if(this.left == undefined){
            this.left = node 
        }else{
            return 'left already exsist'
        }  
    }

    addRight(node: TreeNode) {
        if (this.right == undefined) {
            this.right = node
        } else {
            return 'right already exsist'
        }
    }
    getRight(){
        return this.right
    }
    getLeft() {
        return this.left
    }
}

class Tree {
    root: TreeNode 
    constructor(value:number){
        this.root = new TreeNode(value)
    }

    addNode(value:number, node: TreeNode = this.root): void{
        if(node.value>value){
            if(node.left){
                this.addNode(value,node.left)
            }else{
                node.left = new TreeNode(value)
            }
        }else{
            if (node.right) {
                this.addNode(value, node.right)
            } else {
                node.right = new TreeNode(value)
            } 
        }

    }
    // 递归版本
    PreOrderTravseal(node:TreeNode = this.root, arr: number[] = [] ){
        if(node){
            arr.push(node.value)
            this.PreOrderTravseal(node.left, arr)
            this.PreOrderTravseal(node.right, arr)
        }
        return arr
    }
    // 非递归版
    PreOrderTravseal2(node: TreeNode = this.root, arr: number[] = []){
        let stack : TreeNode[] = []
        let current : TreeNode = node
        while (current || stack.length>0) {
        while(current){
            arr.push(current.value)
            stack.push(current)
            current = current.left as TreeNode
        }
            current = stack.pop() as TreeNode
            current = current.right as TreeNode
        }
        return arr
    }
    /* 对比别人版本后的总结, 递归时,最好在参数中传递最终返回的数组
    PreOrderTravseal(node:TreeNode): TreeNode[] {
        let result: TreeNode[] = []
        if(node != undefined){
            result.push(node)
            // let array1
            // let array2
            if(node.left){
                result.concat(this.PreOrderTravseal(node.left))
            }
            if(node.right){
                result.concat(this.PreOrderTravseal(node.right))
            }
        
            return result
        }else{
            return result
        }
    }
    */
}

let test = new Tree(0)
for(let i = 1 ;i<10; i++){
    
    test.addNode(i)
}
console.log(test.PreOrderTravseal());


