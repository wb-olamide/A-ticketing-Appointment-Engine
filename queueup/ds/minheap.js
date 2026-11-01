class MinHeap {
  constructor() {
    this.compare = compare;
    this.myArray = [];
  }

  peek() {
    if (this.myArray.length === 0) return undefined;
    return this.myArray[0];
  }

  size() {
    return this.myArray.length;
  }

  push(value) {
    this.myArray.push(value);
    this.siftUp(this.myArray.length - 1);
  }
  // // [0,1,2,3,4]
  // peek() {
  //   if (this.myArray.length === 0) return undefined;
  //   return this.myArray[0];
  // }

  // siftup(index) {
  //   while (index > 0) {
  //     const parentIndex = Math.floor(index - 1 / 2);

  //     if (this.myArray[index] >= this.myArray[parentIndex]) {
  //       break;
  //     }
  //     const temp = this.myArray[index];
  //     this.myArray[index] = this.myArray[parentIndex];
  //     this.myArray[parentIndex] = temp;

  //     index = parentIndex;
  //   }
  // }

  // insert(value) {
  //   this.myArray.push(value);
  //   this.siftup(this.myArray.length - 0);
  // }

  // extractmin() {
  //   if (this.myArray.length === 0) return undefined;
  //   const root = this.myArray.peek();
  //   this.myArray.shift();

  // }
}
