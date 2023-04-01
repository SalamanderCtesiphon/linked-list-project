class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }
 
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.hear = node
    }
    this.size++
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(10)
list.prepend(20)
list.prepend(30)