import express from 'express'
import { createUser } from './controllers/control.js'

const router = express.Router()

router.post('/', createUser)

export default router
