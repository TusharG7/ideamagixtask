import express from "express";
import { getAllLectures } from "../controllers/InstructorControllers.js";

const router = express.Router();

// Instructor Panel Routes

// Get the list of all lectures assigned to the logged-in instructor
router.route("/lectures").get(getAllLectures);

export default router;
