class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // no head or tail, return undefined;
        if (!this.head) return undefined;
        // store current tail in let to return later 
        let poppedNode = this.tail;
        // if length is 1 set head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update tail to be prev node 
            this.tail = poppedNode.prev;
            // then set this.next and this.prev
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        let beforeNode = this.get(index - 1);
        let newNode = new Node(val);
        let afterNode = beforeNode.next;
        // before node has to update it's next
        beforeNode.next = newNode;
        // set before and after for new node;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        // after node needs to update it's prev node
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        let delNode = this.get(index);
        delNode.prev.next = delNode.next;
        delNode.next.prev = delNode.prev;
        delNode.prev = null;
        delNode.next = null;

        this.length--;
        return delNode;
    }
}