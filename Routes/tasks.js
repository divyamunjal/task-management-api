const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");

router.get("/api/tasks", async (req, res) => {
  const taskList = await Task.find();
  return res.send({ success: true, taskList: taskList });
});

router.post("/api/tasks/add", async (req, res) => {
  const data = await Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
  });
  data.save();
  return res
    .status(200)
    .send({ success: true, message: "Task created successfully !!" });
});

router.put("/api/tasks/update/:id", async (req, res) => {
  const taskList = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
    });

  if (!taskList) return res .status(400).send({ success: false, message: "Task Id doesn't exist" });

    return res.send({ success: true, message: "Task updated successfully !!" });
});

router.delete("/api/tasks/delete/:id", async (req, res) => {
  const id = await Task.findByIdAndDelete(req.params.id);
  if (!id)
    return res
      .status(400)
      .send({ success: false, message: "Task Id doesn't exist" });
  return res.send({ success: true, message: "Task deleted successfully !!" });
});

module.exports = router;
