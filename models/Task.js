class Task {
    constructor(id, title, completed, todoId, userId) {
      this.id = id;
      this.title = title;
      this.completed = completed;
      this.todoId = todoId;
      this.userId = userId;
    }
  }
  
module.exports = Task;