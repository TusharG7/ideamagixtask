import express from "express";
import {
  addCourse,
  addInstructor,
  assignLecture,
  getAllCourses,
  getAllInstructors,
} from "../controllers/adminControllers.js";

const router = express.Router();
// Admin Panel Routes

// Get list of all instructors
router.route("/instructors").get(getAllInstructors);

// Add a new instructor
router.route("/instructors").post(addInstructor);

// Add a new course
router.route("/courses").post(addCourse);
// Get all Courses
router.route("/courses").get(getAllCourses);

// Assign a lecture to an instructor on a particular date
router.route("/lectures").post(assignLecture);

export default router;
