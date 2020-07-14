import express from 'express'
import verifyJWT from './verifyJWT'
import create from './create'

const tasksRoute = express.Router()

tasksRoute.post('/create', verifyJWT, create)

export default tasksRoute