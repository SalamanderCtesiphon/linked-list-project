
class LinkedList {
  constructor(list) {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
 
}


class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList()


console.log(list.isEmpty());
console.log(list.getSize());