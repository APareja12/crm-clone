const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const url = 'https://f5835cef-51c0-4d5c-b6a1-b8d7424aa952-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:UprdZbwreOFIciUEpjfWZdkw:7dea73a3abefaf972d50f08b579ade903e022fcb21cddb552c968fee8a66641b'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tickets', async (req, res) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Cassandra-Token': token,
      },
    }
    try {
      const response = await axios(`${url}?page-size=20`, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData
  
    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json',
      },
      data: formData,
    }
  
    try {
      const response = await axios(url, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })

  app.delete('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
  
    const options = {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
      },
    }
  
    try {
      const response = await axios(`${url}/${id}`, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })


app.listen(PORT, () => console.log('server running on PORT ' + PORT))