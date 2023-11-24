import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class NotesService {
  async createNote(noteData) {
    const note = await dbContext.Notes.create(noteData)
    await note.populate('creator', 'name picture')
    return note
  }

  async getNotesByProjectId(projectId) {
    const notes = await dbContext.Notes.find({ projectId }).populate('creator', 'name picture')
    return notes
  }

  async destroyNote(noteId, userId) {
    const note = await dbContext.Notes.findById(noteId)
    if (!note) { throw new BadRequest(`Invalid id: ${noteId}`) }
    if (note.creatorId != userId) { throw new Forbidden('This is not your note therefore cannot delete') }
    await note.remove()
    return `Your note has been deleted`
  }
}

export const notesService = new NotesService()