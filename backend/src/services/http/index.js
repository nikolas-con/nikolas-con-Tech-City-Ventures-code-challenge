import express from 'express'
import config from '../../config'
import { authRouter, tasksRouter } from '../../routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use('/api/auth', authRouter)
app.use('/api/tasks', tasksRouter)

const listen = () => {
  app.listen(config.port, () => {
    console.log(`The Backend listen ${config.port}`)
  })
}
export { listen }

