import express from "express"

import {
  upload_file,
  download_file,
  get_files,
  delete_file
} from '../controller/file.controller.js'

const file_routes = express.Router()

file_routes.route('/')
  .get(get_files)
  .post(upload_file)

file_routes.route('/:id')
  .get(download_file)
  .delete(delete_file)

export default file_routes 
