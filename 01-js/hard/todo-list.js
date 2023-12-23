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
  constructor() {
    this.todoItems = new Array()
  }
  add(item) {
    this.todoItems.push(item)
  }
  remove(item) {
    if (item < this.todoItems.length-1) {
      this.todoItems.splice(item, 1)
    }
  }
  update(item, newItem) {
    if (item < this.todoItems.length-1) {
      this.todoItems.splice(item, 1, newItem)
    }
  }
  getAll() {
    return this.todoItems
  }
  get(item) {
    console.log(this.todoItems.length)
    if (item > this.todoItems.length-1) {
      return null
    }
    return this.todoItems[item]
  }
  clear() {
    this.todoItems = new Array()
  }
}

module.exports = Todo;
