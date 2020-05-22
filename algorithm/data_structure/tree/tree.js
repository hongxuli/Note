var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    TreeNode.prototype.addLeft = function (node) {
        if (this.left == undefined) {
            this.left = node;
        }
        else {
            return 'left already exsist';
        }
    };
    TreeNode.prototype.addRight = function (node) {
        if (this.right == undefined) {
            this.right = node;
        }
        else {
            return 'right already exsist';
        }
    };
    TreeNode.prototype.getRight = function () {
        return this.right;
    };
    TreeNode.prototype.getLeft = function () {
        return this.left;
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.root = new TreeNode(value);
    }
    Tree.prototype.addNode = function (value, node) {
        if (node === void 0) { node = this.root; }
        if (node.value > value) {
            if (node.left) {
                this.addNode(value, node.left);
            }
            else {
                node.left = new TreeNode(value);
            }
        }
        else {
            if (node.right) {
                this.addNode(value, node.right);
            }
            else {
                node.right = new TreeNode(value);
            }
        }
    };
    Tree.prototype.PreOrderTravseal = function (node, arr) {
        if (node === void 0) { node = this.root; }
        if (arr === void 0) { arr = []; }
        arr.push(node.value);
        if (node.left) {
            this.PreOrderTravseal(node.left, arr);
        }
        if (node.right) {
            this.PreOrderTravseal(node.right, arr);
        }
        return arr;
    };
    return Tree;
}());
var test = new Tree(0);
for (var i = 1; i < 10; i++) {
    test.addNode(i);
}
console.log(test.PreOrderTravseal());
