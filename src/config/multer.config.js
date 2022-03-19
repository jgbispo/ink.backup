import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${process.env.PWD}/src/upload`)

    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const file_name = `${hash.toString('hex')} - ${file.originalname}`
        cb(null, file_name)
      })
    },

  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const allowed = ['.png', '.jpg', '.jpeg', '.pdf'];
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
}
