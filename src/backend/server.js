import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'it_company_project'

if (!mongoUri) {
  throw new Error('MONGODB_URI must be set in .env')
}

const client = new MongoClient(mongoUri, {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
})

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  try {
    const payload = req.body
    const db = client.db(dbName)
    const collection = db.collection('contacts')
    const result = await collection.insertOne({ ...payload, createdAt: new Date() })
    res.status(201).json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Error saving contact form data:', error)
    res.status(500).json({ success: false, error: 'Unable to save form data' })
  }
})

app.post('/api/start-project', async (req, res) => {
  try {
    const payload = req.body
    const db = client.db(dbName)
    const collection = db.collection('project_requests')
    const result = await collection.insertOne({ ...payload, createdAt: new Date() })
    res.status(201).json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Error saving project request data:', error)
    res.status(500).json({ success: false, error: 'Unable to save project request data' })
  }
})

async function startServer() {
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    process.exit(1)
  }
}

startServer()
