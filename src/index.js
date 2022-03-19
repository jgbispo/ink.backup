import express from 'express'
import ip from 'ip'
import cors from 'cors'

import Response from './domain/response.js'
import logger from './util/logger.js'
import HttpStatus from './controller/file.controller.js'

import file_routes from './router/file.route.js'

const PORT = process.env.PORT || 1603
const app = express()

app.use(cors({ origin: "*" }))

app.use('/file', file_routes)

app.all('/', (req, res) => {
  res.send(new Response(HttpStatus.OK.status, HttpStatus.OK.code, `File System Upload API, v1.0.0 - BispoInk`))
})

app.get('*', (req, res) => {
  res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.status, HttpStatus.NOT_FOUND.code, `Not Found Route`))
})

app.listen(PORT, () => {
  logger.info(`Server is running on: http://${ip.address()}:${PORT}`)
})
