class HashTable{
  constructor(size = 5){
    this.keyMap = new Array(size);   
}
  _hashFunction(key){
    let total = 0;
    let prime = 31;
    for(let char of key){
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
}
  set(key, value){
    let index = this._hashFunction(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this;
  } 
  get(key){
    const index = this._hashFunction(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys(){
    const keys = [];
    
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues(){
    const keys = [];

    for (let i = 0 ; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        for (let j = 0; j < this.keyMap[i].length; j++){
          keys.push(this.keyMap[i][j][1]);
        }
      }
    }
    return keys;
  }

}