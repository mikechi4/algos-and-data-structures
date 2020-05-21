class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead;
    }

    unshift(val) {
        // create new node
        let newNode = new Node(val);
        // if no head, set head and tail to new node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set new nodes next prop to be current head
            newNode.next = this.head;
            // update head
            this.head = newNode;
        }
        //increase by 1
        this.length++;
        // return linkedList
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return false;
        } else {
            foundNode.val = val;
        };
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        if (this.length === 0) return false;
        if (this.length === 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next,
            prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

