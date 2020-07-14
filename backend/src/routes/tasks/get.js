import { Task } from '../../services/database/modals'

const get = async (req, res) => {
  try {
    const { _id: userId } = req.body.user

    if(!userId)
      return res.status(400).json({ message: 'Incomplete request' })
  
    const tasks = await Task.find({ userId })
  
    if(!tasks.length)
      return res.status(200).json({tasks, message: 'Τhere are no entries' })
    
    res.status(200).json({tasks, message: 'Τhere are tasks' })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' })
  }

}

export default get