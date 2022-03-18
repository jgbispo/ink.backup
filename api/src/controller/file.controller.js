import httpStatus from '../utils/http_status.js'
import Response from '../domain/response.js'
import logger from '../utils/logger.js'

export const get_files = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching file`)
  res.status(httpStatus.OK.code).send(new Response(
    httpStatus.OK.code,
    httpStatus.OK.status,
    `Get File`
  ))
}


export const download_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching file`)
  res.status(httpStatus.OK.code).send(new Response(
    httpStatus.OK.code,
    httpStatus.OK.status,
    `Download File`
  ))
}

export const upload_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, saving file`)
  res.status(httpStatus.CREATED.code).send(new Response(
    httpStatus.CREATED.code,
    httpStatus.CREATED.status,
    `Upload File`
  ))
}

export const delete_file = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, deleting file`)
  res.status(httpStatus.OK.code).send(new Response(
    httpStatus.OK.code,
    httpStatus.OK.status,
    `Delete File`
  ))
}
