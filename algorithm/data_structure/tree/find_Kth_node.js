
// 给定一棵二叉搜索树，请找出其中的第k小的结点。 
// 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

// 思路, 中序排列后就是按从小到大的顺序排的

function findKthNode(root, k) {
    const arr = []
    inorder(root,arr)
    if(k>0 && k<arr.length){
        return arr[k-1]
    }
    return null
  }

function inorder(node,arr) {
    if(node){
        inorder(node.left,arr)
        arr.push(node)
        inorder(node.right,arr)
    }
  }  