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

  // Big O complexity O(1)
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

  // Big O complexity O(1)
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

  // Big O complexity O(1)
  peek() {
    if (this.length === 0) return undefined;
    return this.front.data;
  }

  // Big O complexity O(1)
  size() {
    return this.length;
  }

  // Big O complexity O(1)
  isEmpty() {
    return this.length === 0 || this.front === null;
  }

  toArray() {
    const newArray = [];

    let current = this.front;
    while (current) {
      newArray.push(current.data);
      current = current.next;
    }
    return newArray;
  }
}

const queueOne = new Queue();

queueOne.enqueue("A");
queueOne.enqueue("B");
queueOne.enqueue("C");
// console.log(queueOne.dequeue());

console.log(queueOne.toArray());
console.log(queueOne.peek());
console.log(queueOne.size());
