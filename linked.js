class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.next = null;
        this.size = 0;
    }
    getObj(){
        return this
    }
    appendValue(value){
        this.size += 1 
        if(!this.tail){
            this.tail = new Node(value);
            this.head = this.tail
        }
        else{
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            // this.tail.prev = oldTail;
        }
    }
    prependValue(value){
        this.size += 1 
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else{
            let oldhead = this.head;
            this.head = new Node(value);
            this.head.next = oldhead;
            // oldhead.prev = this.head;
        }
    }
    getSize(){
        return this.size;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        return this.tail
    }
    at(index) {
        let currentNode = this.head;
        let i = 0;
        while (currentNode) {
            if (i === index) {
                return currentNode;
            }
            currentNode = currentNode.next
            i++
        }
    }
    pop(){
        delete this.tail.value;
        this.size--;
        let size = this.getSize();
        let newTail = this.at(size - 1);
        this.tail = newTail;
        delete this.tail.next;
        this.tail.next = null;
    }
    containsValue(obj, value) {
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                return this.containsValue(obj[key], value);
            }

            if (obj[key] === value) {
                console.log(this)
                return true;
            }
        }
        return false;
    }
    find(value){
        let i = 0;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return i
            }
                currentNode = currentNode.next;
                i++;
        }
    }
    toString(){
        let str = '';
        let displayArray = [];
        let currentNode = this.head;
        while(currentNode){
                str += `(${currentNode.value})` + " " + '-> ';
                displayArray.push(currentNode.value);
                currentNode = currentNode.next;
        }
        return str + `(null)`;
    }
    insertAt(value, index){
        this.size++;
        let i = 0;
        let currentNode = this.head;
        let slicedNode = this.head.next
        while(currentNode && slicedNode){
            if(i === index - 1){
                let newNode = new Node(value);
                currentNode.next = newNode;
                currentNode.next.next = slicedNode
            }
            currentNode = currentNode.next;
            slicedNode = slicedNode.next
            i++;
        }
    }
    removeAt(index){
        this.size--
        let i = 0;
        let currentNode = this.head;
        let slicedNode = this.head.next.next
        while(currentNode && slicedNode){
            if(i === index - 1){
                currentNode.next = slicedNode;
            }
            i++
            currentNode = currentNode.next;
            slicedNode = slicedNode.next;
        }
    }
}
let gbotemi = new linkedList();
gbotemi.prependValue('one');
// gbotemi.appendValue('two');
gbotemi.appendValue('three');
gbotemi.appendValue('four');
gbotemi.appendValue('five');
gbotemi.appendValue('six');
// gbotemi.appendValue('seven');
gbotemi.appendValue('eight');
gbotemi.appendValue('nine');
gbotemi.appendValue('ten');
gbotemi.insertAt('two', 1);
gbotemi.insertAt('seven',6);
gbotemi.removeAt(3);
gbotemi.insertAt('fourty',3);
console.log(gbotemi.getObj());
console.log(gbotemi.toString());