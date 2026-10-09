class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldtail = this.tail;
      oldtail.next = newNode;
      newNode.prev = oldtail;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldhead = this.head;
      oldhead.prev = newNode;
      newNode.next = oldhead;
      this.head = newNode;
    }
    this.length++;
  }
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    let count;
    if (index < this.length / 2) {
      current = this.head;
      count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //  null - a - b - x - c - null
  insertAt(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.append(value);
    if (index === 0) return this.prepend(value);
    let newNode = new Node(value);
    let currentNode = this.getNode(index);
    let prevNode = currentNode.prev;
    newNode.next = currentNode;
    newNode.prev = prevNode;
    currentNode.prev = newNode;
    prevNode.next = newNode;
  }
}

const listOne = new doubleLinkedList();

listOne.append("A");
listOne.append("C");
listOne.append("D");
listOne.append("F");
listOne.insertAt(1, "B");
// listOne.prepend("A");
// console.log(listOne.getNode(0));
// console.log();

console.log(listOne);
