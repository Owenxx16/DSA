class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop(){

    if(!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;
    while(temp.next){
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  shift(){
    if(!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if(this.length === 0){
      this.tail = null;
    }
    return temp;
  }

  getFirst(){
    return this.head;
  }
  getLast(){
    return this.tail;
  }

  getLast1(){
    if(!this.head) return undefined;
    let temp = this.head;
    while(temp){
      if (!temp.next) return temp;
      temp = temp.next;
    }
  }
  getIndex(index){
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let temp = this.head;
    while (temp){
      if (counter === index) return temp;
      counter++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value){
    let temp = this.head;
    let counter = 0;
    while(temp){
      if(counter === index){
        temp.value = value;
        return true;
      }
      counter++;
      temp = temp.next;
    }
  }
  //Another way to set the value of a node at a given index
  set1(index, value){
    let foundNode = this.getIndex(index);
    if(foundNode){
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index ===0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    let temp = this.getIndex(index-1);
    const newNode = new Node(value);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size(){
    let counter = 0
    let temp = this.head;
    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  clear(){
    this.head = null;
}
  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for(let i = 0; i < this.length; i++){
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const myList = new LinkedList(1);
myList.push(2);
myList.push(3);
myList.push(4);
//myList.unshift(0);
//myList.shift();
//console.log(myList.getFirst());
//console.log(myList.getLast1());
//console.log(myList);
// console.log(myList.insert(2, 5));
// console.log(myList.size());
myList.reverse();
console.log(myList);