import mongoose from 'mongoose'

const connectDB = async () => {
  const url = `mongodb+srv://admin:${process.env.MONGODB_USER_PASSWORD}@test.cuzsz.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  console.log('Connected to MogoDB')
  return true
}
export { connectDB }