const express = require('express');
const taskRoute = require('./Routes/tasks');
const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/task-management")
  .then((result) => console.log('Connected Successfully to Database'))
  .catch((error) => console.log('Error in connected DB' + error));

const app = express();
app.use(express.json());
app.use(taskRoute)



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on PORT: ${port}`))