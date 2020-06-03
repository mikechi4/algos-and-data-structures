class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // O(log n)
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // O(log n)
    find(val) {
        if (!this.root) return false;
        if (this.root.value === val) return this.root;

        let current = this.root,
            round = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return current;
    }

    // Tree Traversal 
    // Breadth First Search
    // iterate at each "level"
    // use a queue to store a node from a level, pushes it into the return array, and removes it from queue
    BFS() {
        let data = [],
            queue = [];
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    //      10 - 1st 
    //    6    15 - 2nd
    //  3   6     20 - 3rd


    // Depth First Search - PreOrder
    // keep going left til you can't then go right 
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        const traverse = (node) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current)
        return data;
    }

    //      10 
    //    6    15 
    //  3   8     20 
    //[10,6 , 3, 8, 15, 20]

    // Depth First Search - PostOrder
    // visit node after we look at left and right. root is the last one visited
    DFSPostOrder() {
        let data = [];

        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value)
        }

        traverse(this.root)
        return data;
    }

    //      10 
    //    6    15 
    //  3   8     20 
    // [3,8,6,20,15,10]

    // DFS IN Order
    // from root traverse entire left side, then back to root, then do entire right side.
    DFSInOrder() {
        let data = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value)
            if (node.right) traverse(node.right);
        }

        traverse(this.root)
        return data;
    }

    //      10 
    //    6    15 
    //  3   8     20 
    // [3,8,6,10,15,20]
}
