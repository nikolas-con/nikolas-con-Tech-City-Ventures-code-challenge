import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId
 
const UserSchema = new Schema({
  author: ObjectId,
  firtName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

UserSchema.pre('save',  async function(next) { 
  if (!this.isModified('password')) 
    return next();
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})
UserSchema.methods.comparePassword = async function(password){
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}
UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, email: this.email}, process.env.JWT_SECRECT)
  return token
}




export default mongoose.model('User', UserSchema)