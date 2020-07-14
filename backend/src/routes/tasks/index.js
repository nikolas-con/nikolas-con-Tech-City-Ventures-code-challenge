import express from 'express'
import verifyJWT from './verifyJWT'
import create from './create'
import get from './get'

const tasksRoute = express.Router()

tasksRoute.post('/create', verifyJWT, create)
tasksRoute.get('/get', verifyJWT, get)

export default tasksRoute