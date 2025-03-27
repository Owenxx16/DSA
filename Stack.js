class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(value){
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
    }else{
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
    }
  }

  pop(){
    if(this.length === 0) return undefined;
    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  min(){
    let min = this.first.value;
    let current = this.first;
    while(current){
      if(current.value < min){
        min = current.value;
      }
      current = current.next;
    }
    return min;
  }
}


const myStack = new Stack(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.min());