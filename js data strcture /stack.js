class stack{
    constructor(){
        this.items =[]
    }

    // isEmpety(){
    //     return this.items.length === 0
    // }
    isEmpety() {
        return !this.items.length
    }

    size(){
        return this.items.length
    }

    clear(){
        this.items = []
    }

    push (el){
        this.items.push(el)
    }

    pop(){
        return this.items.pop()
    }

    last(){
        return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items.toString)
    }
}




class Queue{
    constructor(){
        this.items = []
    }

    isEmpety(){
        return !this.items.length
    }

    size(){
        return this.items.length
    }

    first(){
        if(this.isEmpety){
            return null
        }
        else{
            return this.items[0]
        }
    }

    enqueue(el){
        this.items.push(el)
    }

    dequeue(){
        // return this.first()
        // return and delect first item in arrary 
        return this.items.shift()

    }

    print() {
        console.log(this.items.toString)
    }

    clear() {
        this.items = []
    }
}


class PriorityQueue{
    constructor(){
        this.items = []
    }

    isEmpety() {
        return !this.items.length
    }

    size() {
        return this.items.length
    }


    enqueue(el,priority){
        const element = {el, priority}
        if (this.isEmpety()){
            this.items.push(element)
        }else{
            var preIndex = this.items.findIndex((item)=> item.priority > element.priority)
            if (preIndex===-1){
                this.items.push(element)
            }else{
                this.items.splice(preIndex,0,element)
            }
        }
    }

    dequeue(){
        return this.items.shift()
    }

    print() {
        console.log(this.items.toString)
    }

    clear() {
        this.items = []
    }


}


// class Node{
//     constructor(e){
//         this.element = e
//         this.pre = null
//         this.next = null
//     }
// }


class DoubleLinekedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert(position, element){
        if (position>=0 && position <= this.length){
            const node = new Node(element)
            node.pre = this.head
            node.next = this.tail
        }
    }
}

class Set{
    constructor(){
        this.items = {}
    }

    has(value){
        return this.items.hasOwnProperty(value)
    }
    
    add(value){
        if(!this.has(value)){
            this.items[value] = value
            return true
        }
        return false
    }
    remove(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }
        return false
    }
}


class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    inOrderTraverse(callback) {
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback)
                callback(node.key)
                inOrderTraverseNode(node.right, callback)
            }
        }
        inOrderTraverseNode(this.root, callback)
    }

    preOrderTraverse(callback){
        const preOrderTraverse = (node, callback) => {
            if (node !== null){
                callback(node.key)
                preOrderTraverse(node.left, callback)
                preOrderTraverse(node.right, callback)
            }
        }
        preOrderTraverse(this.root, callback)
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.inOrderTraverse(value => { console.log(value) })
