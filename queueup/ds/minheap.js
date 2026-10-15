class MinHeap {
  constructor() {
    this.myArray = [];
  }

  // [0,1,2,3,4]
  peek() {
    if (this.myArray.length === 0) return undefined;
    return this.myArray[0];
  }

  insert(value) {
    this.myArray.push(value);
  }
}
