class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
  //   Big O complexity O(1)

  pop() {
    if (this.top === null) {
      return undefined;
    }

    let removedNode = this.top;
    this.top = removedNode.next;
    this.length--;
    return removedNode.data;
  }
  // Big O complexity O(1)

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.data;
  }
  // Big O complexity O(1)

  size() {
    return this.length;
  }
  // Big O complexity O(1)

  isEmpty() {
    // if (this.top === null || this.length === 0) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.top === null || this.length === 0;
  }
  // Big O complexity O(1)
}

let mainStack = new Stack();
mainStack.push("A");
mainStack.push("B");
mainStack.push("C");

console.log(mainStack.peek());
console.log(mainStack.size());
mainStack.pop();
mainStack.pop();
console.log(mainStack.size());
console.log(mainStack.isEmpty());

// console.log(mainStack.peek());
// mainStack.pop();
// console.log(mainStack.size());
// console.log(mainStack.isEmpty());

// console.log(mainStack.peek());

// console.log(mainStack.pop());

console.log(mainStack);
