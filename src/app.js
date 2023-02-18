import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

export const app = express()

import './database'

import notesRoutes from './routes/notes.routes'
import authRoutes from './routes/auth.routes'

dotenv.config()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/notes', notesRoutes)
app.use('/api/auth', authRoutes)


export default app

