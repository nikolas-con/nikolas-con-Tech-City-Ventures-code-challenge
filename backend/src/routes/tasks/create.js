import { Task } from '../../services/database/modals'

const create = async (req, res) => {
  try {
    
    const { discretion } = req.body
    const { _id: userId } = req.body.user
    
    if(!userId || !discretion)
      return res.status(400).json({ message: 'Incomplete request' })
  
    const task = new Task({userId, discretion})
  
    await task.save()
  
    res.status(200).json({ message: 'The task had created' })

  } catch (error) {
    res.status(500).json({ message: 'An error occurred' })    
  }
}

export default create