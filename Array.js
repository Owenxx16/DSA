class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift(){
    const firstItem = this.data[0];
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  delete(index){
    const item = this.data[index];
    
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;

  }
}

const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.push('!'));
//console.log(newArray.pop());
console.log(newArray);
console.log(newArray.shift());
console.log(newArray);
