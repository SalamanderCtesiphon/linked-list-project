class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
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
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      let prev = this.head
      while(prev.next) {
        prev = prev.next
      }
      prev.next = node
      this.tail = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index   > this.size) {
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else if (index === this.size) {
      this.append(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= list.size) {
      return null
    }
    let removedNode
    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  at(index) {
    if (index < 0 || index >= list.size) {
      return null
    }
    let curr = this.head
    for(let i = 0; i < index; i++) {
      curr = curr.next
    }
    return curr.value
  }

  pop() {
    list.removeFrom(list.size - 1)
  }

  toSting() {
    if (this.isEmpty()) {
      console.log('List is empty')
    } else {
      let curr = this.head
      let listValues = ''
      while(curr) {
        listValues += `( ${curr.value} ) -> `
        curr = curr.next
      }
      console.log(`${listValues}null`)
    }
  }
}

const list = new LinkedList()


list.insert(30, 0)
list.prepend(20)
list.prepend(10)
list.append(40)
list.toSting()
console.log(`list size: ${list.size}`)
console.log(list.at(0))
console.log(list.at(1))
console.log(list.at(2))
console.log(list.at(3))
console.log(list.tail)
list.pop()
list.toSting()







