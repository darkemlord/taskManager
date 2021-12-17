import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true
    },
  }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
