import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
app.use(express.json()); // convert the coming data
mongoose.connect(process.env.MONGOOSE_DB, () => {
  console.log('Database connected')
})
app.listen(3001, () => {
  console.log('Server running on port 3001')
})
