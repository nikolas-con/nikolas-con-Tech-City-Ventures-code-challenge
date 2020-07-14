import { User } from '../../services/database/modals'

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).json({ message: 'Incomplete request' })

    const userDoc = await User.findOne({ email })

    if (!userDoc)
      return res.status(404).json({ message: 'This user does not exist' })

    const isPasswordMatch = await userDoc.comparePassword(password)

    if (!isPasswordMatch)
      return res.status(403).json({ message: 'Wrong password' })

    const token = await userDoc.generateAuthToken()

    res.status(200).json({ token, message: 'Login in Successfully' })

  } catch (error) {
    res.status(500).json({ message: 'An error occurred' })
  }
}

export default login