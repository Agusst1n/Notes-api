import Note from '../models/notes.model'

export const getNotes = async (req, res) =>{
    try {
        
        const notes = await Note.find({})

        return res.status(200).send({
            status:"success",
            notes
        })

    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

export const getNote = async (req, res) =>{

    try {
        const {noteId} = req.params
        
        const note = await Note.findById(noteId)

        return res.status(200).send({
            status: "Success",
            note
        })
    
    } catch (error) {
        res.status(400).send({
            error
        })
    }

}

export const saveNote = async (req, res) =>{
    try {
        
        const {title, description, author} = req.body

        const note = new Note({
            title,
            description,
            author
        })


        const noteSave = await note.save()

        return res.status(200).send({
            status: "Success",
            noteSave
        })

    } catch (error) {
        res.send(400).send({
            error
        })
    }
}

export const editNote = async (req, res) =>{
    try {
        
        const {noteId} = req.params

        const noteEdit = await Note.findByIdAndUpdate(noteId,req.body,{
            new: true
        })

        return res.status(200).send({
            status: "Success",
            noteEdit
        })

    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

export const deleteNotes = async (req, res) =>{
    try {
        const {noteId} = req.params

        const noteDelete = await Note.findByIdAndDelete(noteId)

        return res.status(200).send({
            status: "Success",
            noteDelete
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}