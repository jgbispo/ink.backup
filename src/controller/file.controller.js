import Response from '../domain/response.js'
import logger from '../util/logger.js'

const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 203, status: "CREATED" },
  NO_CONTENT: { code: 204, status: "NOT CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD REQUEST" },
  NOT_FOUND: { code: 404, status: "NOT FOUND" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL SERVER ERROR" },
}

export const get_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching file`)
  res.status(HttpStatus.OK.code).send(new Response(
    HttpStatus.OK.code,
    HttpStatus.OK.status,
    `Get file router`
  ))
}

export const get_files = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching files`)
  res.status(HttpStatus.OK.code).send(new Response(
    HttpStatus.OK.code,
    HttpStatus.OK.status,
    `Get files router`
  ))
}

export const up_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, upding file`)
  res.status(HttpStatus.OK.code).send(new Response(
    HttpStatus.OK.code,
    HttpStatus.OK.status,
    `Upload router`
  ))
}

export const delete_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, deleting file`)
  res.status(HttpStatus.CREATED.code).send(new Response(
    HttpStatus.CREATED.code,
    HttpStatus.CREATED.status,
    `Delete router`
  ))
}

export default HttpStatus;
