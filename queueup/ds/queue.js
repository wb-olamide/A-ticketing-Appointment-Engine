class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0 || this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return newNode;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let removedNode = this.front;
    this.front = removedNode.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.length--;
    return removedNode.data;
  }
}

const queueOne = new Queue();

// queueOne.enqueue("A");
// queueOne.enqueue("B");
queueOne.enqueue("C");
console.log(queueOne.dequeue());

console.log(queueOne);
