/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.result=[];
  }
  add(todo){
    this.result.push(todo);
  }
  remove(index){
      this.result.splice(index,1);
  }
  update(index,updatedTodo){
    if(index>=0 && index< this.result.length)
          this.result[index]=updatedTodo;
    else return null;
  }
  getAll(){
    return this.result;
  }
  get(index){
    if (index >= 0 && index < this.result.length) return this.result[index];
    else return null;
  }
  clear(){
    this.result=[];
  }
}

module.exports = Todo;
