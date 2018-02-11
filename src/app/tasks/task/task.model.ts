export default class Task {
  title: string;
  createdAt: Date;
  status: string;

  constructor() {
    this.title = ""
    this.createdAt = new Date()
    this.status = ""
  }

  static generateNewTask(newTask): Task {
    return {
        title: newTask,
        createdAt: new Date(),
        status: "pending"
    }
  }
}
