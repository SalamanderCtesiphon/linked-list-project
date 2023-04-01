class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
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

  /* removeFrom(index) {
    if (index < 0 || index >= list.size) {
      return null
    }
    let remocedNode
    if (index === 0) {
      remocedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      remocedNode = prev.next
      prev.next = remocedNode.next
    }
    this.size--
    return remocedNode.value
  } */

  print() {
    if (this.isEmpty()) {
      console.log('List is empty')
    } else {
      let curr = this.head
      let listValues = ''
      while(curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()

list.prepend(10)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.append(20)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.insert(5, 0)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.insert(30, 3)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.insert(15, 2)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.append(40)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)
list.prepend(2)
list.print()
console.log(`list size: ${list.size}`)
console.log(list.tail)






