const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  description: { type: String },
  dueDate: { type: String },
  priority: { type: String },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task