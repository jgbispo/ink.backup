import express from "express"
import multer from 'multer'
import multerConfig from '../config/multer.config.js'

import {
  get_file,
  get_files,
  up_file,
  delete_file
} from '../controller/file.controller.js'

const file_routes = express.Router()

file_routes.route('/')
  .get(get_files)
  .post(multer(multerConfig).single('file'), up_file)

file_routes.route('/:id')
  .get(get_file)
  .delete(delete_file)

export default file_routes
