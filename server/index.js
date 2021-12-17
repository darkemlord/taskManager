import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Task from './models/Task.js';

dotenv.config()
const app = express();
app.use(express.json()); // convert the coming data

mongoose.connect(process.env.MONGOOSE_DB, {
 useNewUrlParser: true,
})

app.get("/", async (req, res) => {
  const task = new Task({
    taskName: "Sacar la basura"
  })
  try{
    await task.save();
    res.send('Inserted data')
  } catch(err) {
    console.log(err)
  }
})
app.listen(3001, () => {
  console.log('Server running on port 3001')
})
