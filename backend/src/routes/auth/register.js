import { User } from '../../services/database/modals'

const register = async (req, res) => {
  try {
    const { email, password, firtName, lastName } = req.body

    if (!email || !password || !firtName || !lastName)
      return res.status(400).json({ message: 'Incomplete request' })

    const userDoc = await User.findOne({ email })

    if (userDoc)
      return res.status(400).json({ message: 'This is an existig user' })

    const user = new User({ email, password, firtName, lastName })

    await user.save()

    const token = await user.generateAuthToken()

    res.status(200).json({ token, massage: 'Signup in Successfully' })

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' })
  }

}

export default register