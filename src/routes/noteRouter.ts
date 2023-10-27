import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getSingleNote, testNote, updateNote } from "../controllers/taskController";


const note_router = Router();

note_router.get("/", testNote);
note_router.post("/create", createNote);
note_router.get("/notes", getAllNotes);
note_router.get("/notes:id", getSingleNote);
note_router.put("/", updateNote);
note_router.delete("/delete", deleteNote);



export default note_router;