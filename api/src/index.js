import express from "express"
import ip from 'ip'
import dotenv from 'dotenv'
import cors from 'cors'

import logger from './utils/logger.js'
import httpStatus from './utils/http_status.js'
import file_route from './router/file.route.js'
import Response from './domain/response.js'

dotenv.config()

const PORT = process.env.PORT || 1803
const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())


app.use('/file', file_route)

app.all('/', (req, res) => {
  res.send(new Response(httpStatus.OK.status, httpStatus.OK.code, `File API, v1.0.0 - All System Go `))
})

app.get('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND.code)
    .send(new Response(httpStatus.NOT_FOUND.status, httpStatus.NOT_FOUND.code, `Not Found Route`))
})

app.listen(PORT, () => {
  logger.info(`Server is running on: http://${ip.address()}:${PORT}`)
})
