import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId
 
const TasksSchema = new Schema({
  author: ObjectId,
  createdAt: { type: Date, default: Date.now, required: true },
  isDone: {type: Boolean, required: true,  default: false},
  discretion: { type: String, required: true },
  userId: { type: String, required: true }
})


export default mongoose.model('Tasks', TasksSchema)