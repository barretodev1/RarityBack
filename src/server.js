import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import userRoutes from './routes.js'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/', userRoutes)

app.listen(3000, () => console.log('SERVIDOR ON'))

export default prisma