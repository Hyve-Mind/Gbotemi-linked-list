class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        // this.head = null;
        // this.tail = null;
        // this.next = null;
    }
    appendValue(value) {
        if (!this.tail) {
            this.tail = new Node(value);
            this.head = this.tail;
        }
        else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            // this.tail.prev = oldTail;
        }
    }
    prependValue(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else {
            let oldhead = this.head;
            this.head = new Node(value);
            this.head.next = oldhead;
            // oldhead.prev = this.head;
        }
    }
    getSize() {
        let currentNode = this.head;
        let size = 0;
        while (currentNode) {
            currentNode = currentNode.next
            size++
        }
        return size;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail
    }
    at(index) {
        let currentNode = this.head;
        let i = 0;
        while (currentNode) {
            if (i === index) {
                return currentNode
            }
            currentNode = currentNode.next
            i++
        }
    }
    pop() {
        if (this.getSize() <= 1) {
            this.head = null;
            this.tail = null;
            return;
        }
        let size = this.getSize();
        let newTail = this.at(size - 2);
        this.tail = newTail;
        this.tail.next = null;
    }
    shift() {
        if (this.getSize() <= 1) {
            this.head = null;
            this.tail = null;
            return;
        }
        let newHead = this.at(1);
        this.head = newHead;
    }
    containsValue(obj, value) {
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                return this.containsValue(obj[key], value);
            }

            if (obj[key] === value) {
                return true;
            }
        }
        return false;
    }
    find(value) {
        let i = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.next;
            i++;
        }
    }
    toString() {
        let str = '';
        let currentNode = this.head;
        while (currentNode) {
            str += `(${currentNode.value})` + " " + '-> ';
            currentNode = currentNode.next;
        }
        return str;
    }
    insertAt(value, index) {
        if (index === 0) {
            this.prependValue(value);
        }
        let i = 0;
        let currentNode = this.head;
        let slicedNode = this.head.next;
        while (currentNode && slicedNode) {
            if (i === index - 1) {
                let newNode = new Node(value);
                currentNode.next = newNode;
                currentNode.next.next = slicedNode;
            }
            currentNode = currentNode.next;
            slicedNode = slicedNode.next;
            i++;
        }
    }
    removeAt(index) {
        let size = this.getSize()
        if (index === size - 1) {
            return this.pop();
        }
        else if (index === 0) {
            return this.shift()
        }
        let i = 0;
        let currentNode = this.head;
        let slicedNode = this.head.next.next
        while (currentNode && slicedNode) {
            if (i === index - 1) {
                currentNode.next = slicedNode;
            }
            i++
            currentNode = currentNode.next;
            slicedNode = slicedNode.next;
        }
    }
}
let list = new linkedList();
list.appendValue('one');
list.containsValue(list,'one') // example of the containsValue, result would be true in this case
list.appendValue('two');
list.appendValue('three');
list.removeAt(1)
console.log(list)