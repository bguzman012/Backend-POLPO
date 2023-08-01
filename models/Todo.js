class Todo {
  constructor(id, title, keywords, userId, tasks = []) {
    this.id = id;
    this.title = title;
    this.keywords = keywords;
    this.userId = userId;
    this.tasks = tasks;
  }
}

module.exports = Todo;
