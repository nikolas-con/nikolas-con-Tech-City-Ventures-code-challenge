import { Task } from '../../services/database/modals'

const get = async (req, res) => {
  try {
    const { _id: userId } = req.body.user

    if (!userId)
      return res.status(400).json({ message: 'Incomplete request' })

    const tasks = await Task.find({ userId })

    if (!tasks.length)
      return res.status(200).json({ tasks, message: 'Τhere are no entries' })

    const userTasks = tasks.map(task => {
      const { createdAt, discretion, isDone, _id } = task
      return {
        createdAt, discretion, isDone, _id
      }
    })

    res.status(200).json({ tasks: userTasks, message: 'Τhere are tasks' })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' })
  }

}

export default get