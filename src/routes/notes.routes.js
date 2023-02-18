import {Router} from 'express'
import * as notesController from '../controllers/notes.controller'
import { verifyToken } from '../middlewares/verifyToken'

const router = Router()

router.get('/', notesController.getNotes)
router.get('/:noteId', notesController.getNote)
router.post('/save', verifyToken,notesController.saveNote)
router.put('/:noteId', verifyToken,notesController.editNote)
router.delete('/:noteId', verifyToken,notesController.deleteNotes)


export default router