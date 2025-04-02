class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vtx){
    if(!this.adjacencyList[vtx]){
      this.adjacencyList[vtx] = [];
      return true;
    }
  }
  addEge(vtx1, vtx2){
    if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);

      return true;
    }
    return false;
}
  removeEdg(vtx1,vtx2){
    if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
      this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v !== vtx2);
      this.adjacencyList[vtx2] = this.adjacencyList[vtx1].filter(v => v !== vtx1);
      return true;
    }
    return false;
  }

  removeVertex(vtx){
    if(!this.adjacencyList[vtx]){
      return;
    }
    for (let neighbor of this.adjacencyList[vtx]){
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v !== vtx)
    }
    delete this.adjacencyList[vtx];
    return this;
  }
}

const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addEge("A","B")
g.addEge("A","C")
g.addEge("A","D")
g.addEge("B","D")
g.addEge("C","D")

console.log(g)
console.log(g.removeVertex("D"));