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

  // Big O complexity O(1)
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

  // Big O complexity O(1)
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

  // Big O complexity O(n)
  //   the performance or execution time of the algorithm grows linearly with the size of the input
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

  // Big O complexity O(n)
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
    this.length++;
  }

  removeNode(node) {
    if (node === null || node === undefined) return null;

    if (node === this.head) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    this.length--;
    node.next = null;
    node.prev = null;
    return node;
  }

  //  null - a - b - x - c - null
  // Big O complexity O(n)
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    let removedNode = this.getNode(index);
    this.removeNode(removedNode);
    return removedNode;
  }

  // Big O complexity O(n)
  findby(predicate) {
    let current = this.head;

    while (current) {
      if (predicate(current)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // 1 -> 2 -> 3 -> 4 -> null
  // null -> 4 -> 3 -> 2 -> 1 ->
  reverse() {
    let current = this.head;
    let prev = null;
    this.tail = this.head;

    while (current) {
      let next = current.next;
      current.next = current.prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  toArray() {
    let myArray = [];
    let current = this.head;

    while (current) {
      myArray.push(current.data);
      current = current.next;
    }
    return myArray;
  }
}

const listOne = new doubleLinkedList();

listOne.append("A");
listOne.append("C");
listOne.append("D");
listOne.append("F");
listOne.insertAt(1, "B");
// listOne.removeNode(7);
// listOne.prepend("A");
// console.log(listOne.getNode(0));
// console.log();

console.log(listOne);
